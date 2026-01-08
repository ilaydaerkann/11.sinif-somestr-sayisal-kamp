
import React, { useState, useEffect, useCallback } from 'react';
import { db } from './db';
import { DayProgram, StudyTask } from './types';
import { INITIAL_PROGRAM } from './constants';
import {
    CheckCircle,
    Circle,
    Calendar,
    BookOpen,
    Download,
    ChevronRight,
    Award,
    BarChart3,
    Search,
    Clock,
    Target,
    CloudCheck,
    Loader2,
    RefreshCw
} from 'lucide-react';

const App: React.FC = () => {
    const [program, setProgram] = useState<DayProgram[]>([]);
    const [activeDay, setActiveDay] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Veritabanından verileri çek
    const loadData = useCallback(async () => {
        try {
            setIsLoading(true);
            const data = await db.getProgram();
            setProgram(data);
        } catch (error) {
            console.error("Veri yüklenirken hata oluştu:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const toggleTask = async (dayNum: number, taskId: string) => {
        setIsSaving(true);
        const updatedProgram = program.map(day => {
            if (day.day === dayNum) {
                return {
                    ...day,
                    tasks: day.tasks.map(task =>
                        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
                    )
                };
            }
            return day;
        });

        setProgram(updatedProgram);

        // Veritabanına kaydet
        try {
            await db.saveProgram(updatedProgram);
        } catch (error) {
            console.error("Kaydedilirken hata:", error);
        } finally {
            setTimeout(() => setIsSaving(false), 500); // Kullanıcıya geri bildirim için kısa süre bekle
        }
    };

    const calculateProgress = () => {
        if (program.length === 0) return 0;
        const total = program.reduce((acc, day) => acc + day.tasks.length, 0);
        const completed = program.reduce((acc, day) => acc + day.tasks.filter(t => t.isCompleted).length, 0);
        return Math.round((completed / total) * 100);
    };

    const getSubjectStats = () => {
        const stats: Record<string, { total: number; completed: number }> = {
            Matematik: { total: 0, completed: 0 },
            Fizik: { total: 0, completed: 0 },
            Kimya: { total: 0, completed: 0 },
            Biyoloji: { total: 0, completed: 0 }
        };

        program.forEach(day => {
            day.tasks.forEach(task => {
                if (stats[task.subject]) {
                    stats[task.subject].total++;
                    if (task.isCompleted) stats[task.subject].completed++;
                }
            });
        });

        return Object.entries(stats).map(([name, data]) => ({
            name,
            value: data.completed,
            total: data.total,
            percentage: Math.round((data.completed / data.total) * 100) || 0
        }));
    };

    const resetProgram = async () => {
        if (confirm("Tüm ilerlemeni silmek istediğine emin misin?")) {
            setIsLoading(true);
            await db.resetDB();
            await loadData();
        }
    };

    const exportToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Gun,Saat,Ders,Konu,Sure,Durum\n";
        program.forEach(day => {
            day.tasks.forEach(task => {
                const row = `${day.day},${task.timeRange},${task.subject},${task.topic.replace(/,/g, '')},${task.duration},${task.isCompleted ? 'Tamamlandi' : 'Bekliyor'}`;
                csvContent += row + "\n";
            });
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "11_Sinif_Somestr_Programi.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
                <p className="text-slate-500 font-medium animate-pulse">Veritabanına bağlanılıyor...</p>
            </div>
        );
    }

    const currentDayData = program.find(d => d.day === activeDay);
    const subjectStats = getSubjectStats();
    const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <header className="bg-indigo-700 text-white p-6 shadow-lg sticky top-0 z-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <Award className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">11. Sınıf Sayısal Kampı</h1>
                            <div className="flex items-center gap-2">
                                <span className="text-indigo-100 text-sm">Akıllı Çalışma Takip Sistemi</span>
                                {isSaving ? (
                                    <span className="flex items-center gap-1 text-[10px] bg-indigo-600 px-2 py-0.5 rounded-full animate-pulse">
                                        <RefreshCw className="w-3 h-3 animate-spin" /> Kaydediliyor...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-[10px] bg-green-600/30 text-green-100 px-2 py-0.5 rounded-full">
                                        <CloudCheck className="w-3 h-3" /> Eşitlendi
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-indigo-800/50 p-3 rounded-full border border-indigo-400/30">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs uppercase font-semibold text-indigo-200">Genel İlerleme</p>
                            <p className="text-lg font-bold">%{calculateProgress()}</p>
                        </div>
                        <div className="w-16 h-16 relative">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-indigo-900" />
                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent"
                                    strokeDasharray={2 * Math.PI * 28}
                                    strokeDashoffset={2 * Math.PI * 28 * (1 - calculateProgress() / 100)}
                                    className="text-white transition-all duration-700" />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">%{calculateProgress()}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
                        <h3 className="flex items-center gap-2 font-bold text-slate-700 mb-4">
                            <BarChart3 className="w-5 h-5 text-indigo-500" /> İstatistikler
                        </h3>
                        <div className="space-y-4">
                            {subjectStats.map((stat, idx) => (
                                <div key={stat.name}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-slate-600">{stat.name}</span>
                                        <span className="text-slate-400">{stat.value}/{stat.total}</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{ width: `${stat.percentage}%`, backgroundColor: COLORS[idx % COLORS.length] }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-slate-700 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-indigo-500" /> Program Akışı
                            </h3>
                            <button onClick={exportToCSV} className="text-indigo-600 hover:text-indigo-700 transition flex items-center gap-1 text-sm font-semibold">
                                <Download className="w-4 h-4" /> CSV
                            </button>
                        </div>
                        <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
                            {program.map((day) => {
                                const dayProgress = Math.round((day.tasks.filter(t => t.isCompleted).length / day.tasks.length) * 100);
                                return (
                                    <button
                                        key={day.day}
                                        onClick={() => setActiveDay(day.day)}
                                        className={`w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 ${activeDay === day.day ? 'bg-indigo-50/50 border-l-4 border-l-indigo-500' : ''}`}
                                    >
                                        <div className="text-left">
                                            <p className={`font-semibold ${activeDay === day.day ? 'text-indigo-700' : 'text-slate-700'}`}>
                                                {day.dateLabel} {day.day > 10 && <span className="text-[9px] bg-purple-100 text-purple-600 px-1 py-0.5 rounded ml-1">YENİ</span>}
                                            </p>
                                            <p className="text-[10px] text-slate-400 uppercase font-medium">{day.day <= 10 ? '1. Dönem Tekrar' : '2. Dönem Giriş'}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {dayProgress === 100 ? <CheckCircle className="w-5 h-5 text-green-500" /> : <span className="text-xs font-bold text-slate-500">%{dayProgress}</span>}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Task List */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 min-h-[600px]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">{currentDayData?.dateLabel}</h2>
                                <p className="text-indigo-600 font-bold flex items-center gap-2 mt-1">
                                    <Target className="w-4 h-4" /> {currentDayData?.focus}
                                </p>
                            </div>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Ders veya konu ara..."
                                    className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-56 transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {currentDayData?.tasks
                                .filter(t => t.topic.toLowerCase().includes(searchTerm.toLowerCase()) || t.subject.toLowerCase().includes(searchTerm.toLowerCase()))
                                .map((task) => (
                                    <div
                                        key={task.id}
                                        onClick={() => toggleTask(currentDayData.day, task.id)}
                                        className={`group cursor-pointer p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${task.isCompleted
                                                ? 'bg-green-50/50 border-green-200 shadow-inner'
                                                : 'bg-white border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:-translate-y-0.5'
                                            }`}
                                    >
                                        <div className="mt-1">
                                            {task.isCompleted ? (
                                                <div className="bg-green-600 rounded-full p-0.5"><CheckCircle className="w-5 h-5 text-white" /></div>
                                            ) : (
                                                <Circle className="w-6 h-6 text-slate-200 group-hover:text-indigo-300 transition-colors" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase ${task.subject === 'Matematik' ? 'bg-blue-100 text-blue-700' :
                                                            task.subject === 'Fizik' ? 'bg-red-100 text-red-700' :
                                                                task.subject === 'Kimya' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                        }`}>
                                                        {task.subject}
                                                    </span>
                                                    <span className="text-slate-500 text-xs font-bold flex items-center gap-1">
                                                        <Clock className="w-3 h-3 text-indigo-400" /> {task.timeRange}
                                                    </span>
                                                </div>
                                                <span className="text-slate-400 text-[10px] font-medium">{task.duration}</span>
                                            </div>
                                            <h4 className={`text-lg font-bold tracking-tight leading-snug ${task.isCompleted ? 'text-green-800/60 line-through' : 'text-slate-700'}`}>
                                                {task.topic}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h5 className="font-bold text-xl mb-2 italic text-indigo-300">"Gelecek, bugünden ona hazırlananlarındır."</h5>
                                <p className="text-slate-400 text-sm">Malcolm X — Sayısal Kamp Modeli</p>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-1000" />
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-6 left-6 right-6 md:left-auto flex justify-center md:justify-end">
                <button
                    onClick={resetProgram}
                    className="bg-white/80 backdrop-blur-md text-slate-400 px-6 py-3 rounded-2xl shadow-xl border border-slate-200 text-xs font-bold hover:text-red-500 hover:bg-red-50 transition-all flex items-center gap-2"
                >
                    <RefreshCw className="w-3 h-3" /> Verileri Sıfırla
                </button>
            </div>
        </div>
    );
};

export default App;
