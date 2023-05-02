import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  alias?: SortOrder;
  createdAt?: SortOrder;
  exitDate?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  initialDeposit?: SortOrder;
  joinedDate?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  preferedDepositMode?: SortOrder;
  referalName?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
