import { Society as TSociety } from "../api/society/Society";

export const SOCIETY_TITLE_FIELD = "cmunname";

export const SocietyTitle = (record: TSociety): string => {
  return record.cmunname || String(record.id);
};
