import { Address } from "../address/Address";

export type Society = {
  address?: Address;
  cmunname: string;
  createdAt: Date;
  deleted: boolean;
  description: string | null;
  enabled: boolean;
  id: string;
  managerName: string | null;
  maxRequiredMember: string | null;
  name: string;
  updatedAt: Date;
};
