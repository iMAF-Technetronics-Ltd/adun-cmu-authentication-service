import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string;
  alias?: string | null;
  exitDate?: Date | null;
  firstName?: string | null;
  initialDeposit?: number;
  joinedDate?: Date;
  lastName?: string | null;
  password?: string;
  preferedDepositMode?: string | null;
  referalName?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
