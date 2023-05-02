import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type UserWhereInput = {
  address?: StringFilter;
  exitDate?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  initialDeposit?: FloatFilter;
  joinedDate?: DateTimeFilter;
  lastName?: StringNullableFilter;
  referalName?: StringNullableFilter;
  username?: StringFilter;
};
