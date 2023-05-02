import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SocietyWhereInput = {
  address?: AddressWhereUniqueInput;
  cmunname?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
};
