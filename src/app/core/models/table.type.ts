
export type TableHeader = {
    title: string;
    name: string;
}

export type TableConfig = {
    hasView?: boolean;
    hasEdit?: boolean;
    hasDelete?: boolean;
    hasOptions?: boolean;
}