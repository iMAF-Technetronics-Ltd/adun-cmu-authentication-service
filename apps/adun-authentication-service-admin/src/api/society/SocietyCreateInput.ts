import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type SocietyCreateInput = {
  address: AddressWhereUniqueInput;
  cmunname: string;
  deleted: boolean;
  description?: string | null;
  enabled: boolean;
  managerName?: string | null;
  maxRequiredMember?: string | null;
  name: string;
};
