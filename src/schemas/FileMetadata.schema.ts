import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FileMetadata extends Document {
  @Prop()
  originalname: string;

  @Prop()
  data: string;

  @Prop()
  buffer: string;

  @Prop()
  contentType: string;

  @Prop()
  size: number;
}

export const FileMetadataSchema = SchemaFactory.createForClass(FileMetadata);
