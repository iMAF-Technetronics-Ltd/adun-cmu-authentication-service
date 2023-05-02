import { AdunCmus as TAdunCmus } from "../api/adunCmus/AdunCmus";

export const ADUNCMUS_TITLE_FIELD = "name";

export const AdunCmusTitle = (record: TAdunCmus): string => {
  return record.name || String(record.id);
};
