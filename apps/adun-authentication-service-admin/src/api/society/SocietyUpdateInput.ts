import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type SocietyUpdateInput = {
  address?: AddressWhereUniqueInput;
  cmunname?: string;
  deleted?: boolean;
  description?: string | null;
  enabled?: boolean;
  managerName?: string | null;
  maxRequiredMember?: string | null;
  name?: string;
};
