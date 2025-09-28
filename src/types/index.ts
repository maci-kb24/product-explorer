 export interface Item {
    id: number;
    title: string;
    description: string;
    category: string;
    createdAt: Date;
}

export interface ItemFormData {
  title: string;
  description: string;
  category: string;
}