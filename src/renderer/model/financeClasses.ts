import { nanoid } from "nanoid";

export interface FinanceType {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export class Income implements FinanceType {
  id: string = nanoid();
  title: string;
  amount: number;
  category: string;
  date: string;

  constructor(title: string, amount: number, category: string, date: string) {
    this.title = title;
    this.amount = amount;
    this.category = category;
    this.date = date;
  }
}

export class Outcome implements FinanceType {
  id: string = nanoid();
  title: string;
  amount: number;
  category: string;
  date: string;

  constructor(title: string, amount: number, category: string, date: string) {
    this.title = title;
    this.amount = amount;
    this.category = category;
    this.date = date;
  }
}
