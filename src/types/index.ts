interface Item {
    id: number;
    title: string;
    description: string;
    category: string;
    createdAt: Date;
}

interface ItemFormData {
  title: string;
  description: string;
  category: string;
}