import { Injectable, Logger } from '@nestjs/common';
import { Document, DocumentAgentMap, Identifier } from '@purepm/db-entities';
import { DMSCreateAgentMapInput } from './types/dms.types';

@Injectable()
export class DMSService {
  readonly documentAgentMapEntity;
  readonly documentEntity;

  private readonly logger = new Logger(DMSService.name);

  constructor() {
    this.documentAgentMapEntity = DocumentAgentMap;
    this.documentEntity = Document;
  }

  bulkCreate(input: DMSCreateAgentMapInput[]): Promise<DocumentAgentMap[]> {
    this.logger.debug(`[bulkCreate]`);

    return this.documentAgentMapEntity.bulkCreate(input, { returning: true });
  }

  findDocumentByDocId(doc_id: Identifier): Promise<Document | null> {
    this.logger.debug(`[findDocumentByDocId]`);

    return this.documentEntity.findOne({ where: { doc_id } });
  }
}
