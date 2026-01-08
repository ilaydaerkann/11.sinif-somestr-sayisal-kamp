import { DayProgram } from './types';

export const INITIAL_PROGRAM: DayProgram[] = [
    // 1. DÖNEM TEKRARI (GÜN 1-10)
    {
        day: 1,
        dateLabel: "1. Gün",
        focus: "1. Dönem: Trigonometri & Kuvvet",
        tasks: [
            { id: "1-1", subject: "Matematik", topic: "Trigonometri: Yönlü Açılar ve Birim Çember", duration: "120 dk", timeRange: "09:00 - 11:00", isCompleted: false },
            { id: "1-2", subject: "Fizik", topic: "Vektörler ve Bağıl Hareket", duration: "90 dk", timeRange: "11:30 - 13:00", isCompleted: false },
            { id: "1-3", subject: "Kimya", topic: "Modern Atom Teorisi: Kuantum Modeli", duration: "90 dk", timeRange: "14:30 - 16:00", isCompleted: false },
            { id: "1-4", subject: "Biyoloji", topic: "Sinir Sisteminin Yapısı ve İşleyişi", duration: "60 dk", timeRange: "16:30 - 17:30", isCompleted: false }
        ]
    },
    {
        day: 2,
        dateLabel: "2. Gün",
        focus: "1. Dönem: Teoremler & Yasalar",
        tasks: [
            { id: "2-1", subject: "Matematik", topic: "Trigonometri: Kosinüs ve Sinüs Teoremleri", duration: "120 dk", timeRange: "09:00 - 11:00", isCompleted: false },
            { id: "2-2", subject: "Fizik", topic: "Newton’ın Hareket Yasaları", duration: "90 dk", timeRange: "11:30 - 13:00", isCompleted: false },
            { id: "2-3", subject: "Kimya", topic: "Periyodik Sistem ve Elektron Dizilimleri", duration: "90 dk", timeRange: "14:30 - 16:00", isCompleted: false },
            { id: "2-4", subject: "Biyoloji", topic: "Endokrin Bezler ve Hormonlar", duration: "60 dk", timeRange: "16:30 - 17:30", isCompleted: false }
        ]
    },
    {
        day: 3,
        dateLabel: "3. Gün",
        focus: "1. Dönem: Grafikler & Hareket",
        tasks: [
            { id: "3-1", subject: "Matematik", topic: "Trigonometrik Fonksiyon Grafikleri", duration: "120 dk", timeRange: "09:00 - 11:00", isCompleted: false },
            { id: "3-2", subject: "Fizik", topic: "Bir Boyutta Sabit İvmeli Hareket (Atışlar)", duration: "120 dk", timeRange: "11:30 - 13:30", isCompleted: false },
            { id: "3-3", subject: "Kimya", topic: "Periyodik Özellikler ve Elementler", duration: "90 dk", timeRange: "15:00 - 16:30", isCompleted: false },
            { id: "3-4", subject: "Biyoloji", topic: "Duyu Organları: Yapı ve İşleyiş", duration: "60 dk", timeRange: "17:00 - 18:00", isCompleted: false }
        ]
    },
    {
        day: 4,
        dateLabel: "4. Gün",
        focus: "1. Dönem: Analitik & Atışlar",
        tasks: [
            { id: "4-1", subject: "Matematik", topic: "Analitik Geometri: İki Nokta Arası Uzaklık", duration: "120 dk", timeRange: "09:00 - 11:00", isCompleted: false },
            { id: "4-2", subject: "Fizik", topic: "İki Boyutta Hareket: Yatay ve Düşey Atış", duration: "120 dk", timeRange: "11:30 - 13:30", isCompleted: false },
            { id: "4-3", subject: "Kimya", topic: "Gazlar: Gaz Yasaları ve İdeal Gaz", duration: "120 dk", timeRange: "15:00 - 17:00", isCompleted: false },
            { id: "4-4", subject: "Biyoloji", topic: "Destek ve Hareket Sistemi", duration: "60 dk", timeRange: "17:30 - 18:30", isCompleted: false }
        ]
    },
    {
        day: 5,
        dateLabel: "5. Gün",
        focus: "1. Dönem: Doğru Analitiği & Enerji",
        tasks: [
            { id: "5-1", subject: "Matematik", topic: "Analitik Düzlemde Doğrular ve Eğim", duration: "150 dk", timeRange: "09:00 - 11:30", isCompleted: false },
            { id: "5-2", subject: "Fizik", topic: "Enerji ve Hareket", duration: "120 dk", timeRange: "13:00 - 15:00", isCompleted: false },
            { id: "5-3", subject: "Kimya", topic: "Gazlarda Kinetik Teori ve Karışımlar", duration: "90 dk", timeRange: "15:30 - 17:00", isCompleted: false },
            { id: "5-4", subject: "Biyoloji", topic: "Sindirim Sistemi Fizyolojisi", duration: "90 dk", timeRange: "17:30 - 19:00", isCompleted: false }
        ]
    },
    {
        day: 6,
        dateLabel: "6. Gün",
        focus: "1. Dönem: Parabol & Momentum",
        tasks: [
            { id: "6-1", subject: "Matematik", topic: "İkinci Dereceden Fonksiyonlar (Parabol)", duration: "150 dk", timeRange: "09:00 - 11:30", isCompleted: false },
            { id: "6-2", subject: "Fizik", topic: "İtme ve Çizgisel Momentum", duration: "120 dk", timeRange: "13:00 - 15:00", isCompleted: false },
            { id: "6-3", subject: "Kimya", topic: "Sıvı Çözeltiler ve Çözünürlük Giriş", duration: "90 dk", timeRange: "15:30 - 17:00", isCompleted: false },
            { id: "6-4", subject: "Biyoloji", topic: "Dolaşım Sistemi: Kalp ve Damarlar", duration: "90 dk", timeRange: "17:30 - 19:00", isCompleted: false }
        ]
    },
    {
        day: 7,
        dateLabel: "7. Gün",
        focus: "1. Dönem: Fonksiyon Dönüşümleri & Tork",
        tasks: [
            { id: "7-1", subject: "Matematik", topic: "Fonksiyonların Dönüşümleri", duration: "120 dk", timeRange: "09:00 - 11:00", isCompleted: false },
            { id: "7-2", subject: "Fizik", topic: "Tork, Denge ve Kütle Merkezi", duration: "150 dk", timeRange: "11:30 - 14:00", isCompleted: false },
            { id: "7-3", subject: "Kimya", topic: "Derişim Birimleri (Molarite-Molalite)", duration: "120 dk", timeRange: "15:30 - 17:30", isCompleted: false },
            { id: "7-4", subject: "Biyoloji", topic: "Lenf Dolaşımı ve Bağışıklık", duration: "90 dk", timeRange: "18:00 - 19:30", isCompleted: false }
        ]
    },
    {
        day: 8,
        dateLabel: "8. Gün",
        focus: "1. Dönem: Karma Soru Çözümü",
        tasks: [
            { id: "8-1", subject: "Matematik", topic: "Trigonometri ve Analitik Karma Tekrar", duration: "150 dk", timeRange: "09:00 - 11:30", isCompleted: false },
            { id: "8-2", subject: "Fizik", topic: "Basit Makineler", duration: "120 dk", timeRange: "13:00 - 15:00", isCompleted: false },
            { id: "8-3", subject: "Kimya", topic: "Koligatif Özellikler", duration: "90 dk", timeRange: "15:30 - 17:00", isCompleted: false },
            { id: "8-4", subject: "Biyoloji", topic: "Solunum Sistemi Fizyolojisi", duration: "120 dk", timeRange: "17:30 - 19:30", isCompleted: false }
        ]
    },
    {
        day: 9,
        dateLabel: "9. Gün",
        focus: "1. Dönem: Enerji & Boşaltım",
        tasks: [
            { id: "9-1", subject: "Matematik", topic: "Fonksiyon Uygulamaları Genel Test", duration: "180 dk", timeRange: "09:00 - 12:00", isCompleted: false },
            { id: "9-2", subject: "Fizik", topic: "Kuvvet ve Hareket Genel Tekrar", duration: "120 dk", timeRange: "13:30 - 15:30", isCompleted: false },
            { id: "9-3", subject: "Kimya", topic: "Kimyasal Tepkimelerde Enerji (Entalpi)", duration: "120 dk", timeRange: "16:00 - 18:00", isCompleted: false },
            { id: "9-4", subject: "Biyoloji", topic: "Üriner Sistem (Boşaltım)", duration: "90 dk", timeRange: "18:30 - 20:00", isCompleted: false }
        ]
    },
    {
        day: 10,
        dateLabel: "10. Gün",
        focus: "1. Dönem: Genel Deneme & Kapanış",
        tasks: [
            { id: "10-1", subject: "Matematik", topic: "1. Dönem Sayısal Deneme Sınavı", duration: "165 dk", timeRange: "09:30 - 12:15", isCompleted: false },
            { id: "10-2", subject: "Fizik", topic: "Eksik Konu Analizi ve Nokta Atışı Tekrar", duration: "120 dk", timeRange: "14:00 - 16:00", isCompleted: false },
            { id: "10-3", subject: "Kimya", topic: "Tepkime Isılarının Toplanabilirliği", duration: "90 dk", timeRange: "16:30 - 18:00", isCompleted: false },
            { id: "10-4", subject: "Biyoloji", topic: "1. Dönem Sistemler Genel Tekrar", duration: "90 dk", timeRange: "19:00 - 20:30", isCompleted: false }
        ]
    },

    // 2. DÖNEM BAŞLANGIÇ (GÜN 11-15)
    {
        day: 11,
        dateLabel: "11. Gün",
        focus: "2. Dönem: Denklemler & Potansiyel",
        tasks: [
            { id: "11-1", subject: "Matematik", topic: "İkinci Dereceden İki Bilinmeyenli Denklemler", duration: "120 dk", timeRange: "09:00 - 11:00", isCompleted: false },
            { id: "11-2", subject: "Fizik", topic: "Elektriksel Kuvvet, Alan ve Potansiyel", duration: "150 dk", timeRange: "11:30 - 14:00", isCompleted: false },
            { id: "11-3", subject: "Kimya", topic: "Kimyasal Tepkimelerde Hız (Giriş)", duration: "90 dk", timeRange: "15:30 - 17:00", isCompleted: false },
            { id: "11-4", subject: "Biyoloji", topic: "Üreme Sistemi ve Embriyonik Gelişim", duration: "90 dk", timeRange: "18:00 - 19:30", isCompleted: false }
        ]
    },
    {
        day: 12,
        dateLabel: "12. Gün",
        focus: "2. Dönem: Eşitsizlikler & Sığa",
        tasks: [
            { id: "12-1", subject: "Matematik", topic: "İkinci Dereceden Bir Bilinmeyenli Eşitsizlikler", duration: "150 dk", timeRange: "09:00 - 11:30", isCompleted: false },
            { id: "12-2", subject: "Fizik", topic: "Düzgün Elektrik Alan ve Sığa", duration: "120 dk", timeRange: "13:00 - 15:00", isCompleted: false },
            { id: "12-3", subject: "Kimya", topic: "Tepkime Hızını Etkileyen Faktörler", duration: "90 dk", timeRange: "15:30 - 17:00", isCompleted: false },
            { id: "12-4", subject: "Biyoloji", topic: "Komünite Ekolojisi: Rekabet ve Simbiyoz", duration: "90 dk", timeRange: "17:30 - 19:00", isCompleted: false }
        ]
    },
    {
        day: 13,
        dateLabel: "13. Gün",
        focus: "2. Dönem: Çember & Manyetizma",
        tasks: [
            { id: "13-1", subject: "Matematik", topic: "Çemberin Temel Elemanları ve Açılar", duration: "150 dk", timeRange: "09:00 - 11:30", isCompleted: false },
            { id: "13-2", subject: "Fizik", topic: "Manyetizma ve Elektromanyetik İndüklenme", duration: "150 dk", timeRange: "13:00 - 15:30", isCompleted: false },
            { id: "13-3", subject: "Kimya", topic: "Kimyasal Denge Temelleri", duration: "120 dk", timeRange: "16:00 - 18:00", isCompleted: false },
            { id: "13-4", subject: "Biyoloji", topic: "Popülasyon Ekolojisi", duration: "60 dk", timeRange: "18:30 - 19:30", isCompleted: false }
        ]
    },
    {
        day: 14,
        dateLabel: "14. Gün",
        focus: "2. Dönem: Daire & Alternatif Akım",
        tasks: [
            { id: "14-1", subject: "Matematik", topic: "Çemberde Teğet ve Dairenin Alanı", duration: "120 dk", timeRange: "09:00 - 11:00", isCompleted: false },
            { id: "14-2", subject: "Fizik", topic: "Alternatif Akım ve Transformatörler", duration: "120 dk", timeRange: "11:30 - 13:30", isCompleted: false },
            { id: "14-3", subject: "Kimya", topic: "Sulu Çözelti Dengeleri (Asit-Baz Giriş)", duration: "120 dk", timeRange: "15:00 - 17:00", isCompleted: false },
            { id: "14-4", subject: "Biyoloji", topic: "Ekoloji Genel Tekrar ve Soru Çözümü", duration: "90 dk", timeRange: "17:30 - 19:00", isCompleted: false }
        ]
    },
    {
        day: 15,
        dateLabel: "15. Gün",
        focus: "2. Dönem: Katı Cisimler & Olasılık",
        tasks: [
            { id: "15-1", subject: "Matematik", topic: "Uzay Geometri: Katı Cisimler ve Olasılık", duration: "150 dk", timeRange: "09:00 - 11:30", isCompleted: false },
            { id: "15-2", subject: "Fizik", topic: "2. Dönem Başlangıç Konuları Genel Tekrar", duration: "120 dk", timeRange: "13:00 - 15:00", isCompleted: false },
            { id: "15-3", subject: "Kimya", topic: "Hız ve Denge Karma Soru Çözümü", duration: "120 dk", timeRange: "15:30 - 17:30", isCompleted: false },
            { id: "15-4", subject: "Biyoloji", topic: "Somestr Kampı Genel Değerlendirme", duration: "60 dk", timeRange: "18:00 - 19:00", isCompleted: false }
        ]
    }
];
