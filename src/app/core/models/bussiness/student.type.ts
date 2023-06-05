
export type Student = {
    id: number;
    courseId: number;
    name: string;
    age: number;
    gender: Gender;
}

export type Gender = "M" | "F";