
export type Course = {
    id: number;
    name: string;
    grade: Grade;
    subGroup: SubGroup;
    session: Session;
    director: string;
}

export type Grade = "1th" | "2th" | "3th" | "4th" | "5th" | "6th" | "7th" | "8th" | "9th" | "10th" | "11th" | "12th";

export type SubGroup = "A" | "B" | "C" | "D";

export type Session = "Morning" | "Afternoon" | "Full-Day";