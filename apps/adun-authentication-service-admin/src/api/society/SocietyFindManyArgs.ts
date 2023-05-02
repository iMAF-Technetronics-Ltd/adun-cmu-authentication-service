import { SocietyWhereInput } from "./SocietyWhereInput";
import { SocietyOrderByInput } from "./SocietyOrderByInput";

export type SocietyFindManyArgs = {
  where?: SocietyWhereInput;
  orderBy?: Array<SocietyOrderByInput>;
  skip?: number;
  take?: number;
};
