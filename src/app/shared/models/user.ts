import { Bank } from "./bank";

export interface User {
  account: string;
  bank: Bank;
  email: string;
  name: string;
  numberAccount: number;
  phone: number;
  rut: string;
}