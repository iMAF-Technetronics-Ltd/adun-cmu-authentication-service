import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";
import { SocietyCreateNestedManyWithoutAddressesInput } from "./SocietyCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  societies?: SocietyCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
