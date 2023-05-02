import { JsonValue } from "type-fest";

export type User = {
  address: string;
  alias: string | null;
  createdAt: Date;
  exitDate: Date | null;
  firstName: string | null;
  id: string;
  initialDeposit: number;
  joinedDate: Date;
  lastName: string | null;
  preferedDepositMode: string | null;
  referalName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
