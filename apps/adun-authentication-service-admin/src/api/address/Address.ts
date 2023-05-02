import { Customer } from "../customer/Customer";
import { Society } from "../society/Society";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  societies?: Array<Society>;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
