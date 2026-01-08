
import { DayProgram } from './types';
import { INITIAL_PROGRAM } from './constants';

const DB_NAME = 'StudyPlannerDB';
const STORE_NAME = 'programs';

/**
 * Bu servis, veritabanı işlemlerini soyutlar. 
 * Şu an LocalStorage üzerinden çalışıyor ancak asenkron (async/await) yapısı sayesinde 
 * tek bir satır değişikliği ile Firebase, Supabase veya IndexedDB'ye bağlanabilir.
 */
export const db = {
    // Verileri getir
    async getProgram(): Promise<DayProgram[]> {
        // Gerçek bir API çağrısını simüle etmek için kısa bir gecikme
        await new Promise(resolve => setTimeout(resolve, 300));

        const data = localStorage.getItem(STORE_NAME);
        if (!data) {
            // Eğer DB boşsa başlangıç programını kaydet ve dön
            await this.saveProgram(INITIAL_PROGRAM);
            return INITIAL_PROGRAM;
        }
        return JSON.parse(data);
    },

    // Verileri kaydet
    async saveProgram(program: DayProgram[]): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 100)); // DB yazma gecikmesi simülasyonu
        localStorage.setItem(STORE_NAME, JSON.stringify(program));
    },

    // Tek bir günü güncelle (Performans için)
    async updateDay(dayNum: number, updatedDay: DayProgram): Promise<void> {
        const program = await this.getProgram();
        const index = program.findIndex(d => d.day === dayNum);
        if (index !== -1) {
            program[index] = updatedDay;
            await this.saveProgram(program);
        }
    },

    // Verileri sıfırla
    async resetDB(): Promise<void> {
        localStorage.removeItem(STORE_NAME);
    }
};
