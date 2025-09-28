 export interface Item {
    id: string;
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