import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { SocietyUpdateManyWithoutAddressesInput } from "./SocietyUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  societies?: SocietyUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
