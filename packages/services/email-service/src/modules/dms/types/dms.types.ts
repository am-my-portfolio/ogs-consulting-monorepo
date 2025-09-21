import { DocumentMapType, Identifier } from '@purepm/purepm-lovs';

export type DMSCreateAgentMapInput = {
  doc_id: Identifier;
  bulk_email_id: Identifier;
  map_type_id: DocumentMapType;
};
