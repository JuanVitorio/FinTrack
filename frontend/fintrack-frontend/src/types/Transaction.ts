export type Category = 'expense' | 'income';

export interface Transaction {
    id?: number;
    name: string;
    amount: number;
    category: Category;
    date?: string; 
  }