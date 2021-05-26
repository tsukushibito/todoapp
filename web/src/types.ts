export type TodoItem = {
    id: number;
    text: string;
    isComplete: boolean;
}

export type TodoList = {
    id: number;
    name: string;
    items: TodoItem[];
}