
export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

export type AuthUser = Omit<User, 'name' | 'id'>;
