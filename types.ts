
export interface StudyTask {
    id: string;
    subject: 'Matematik' | 'Fizik' | 'Kimya' | 'Biyoloji';
    topic: string;
    duration: string;
    timeRange: string;
    isCompleted: boolean;
}

export interface DayProgram {
    day: number;
    dateLabel: string;
    focus: string;
    tasks: StudyTask[];
}
