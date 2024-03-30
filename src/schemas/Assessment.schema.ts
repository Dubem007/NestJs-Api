import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  QuestionOption,
  QuestionType,
} from 'src/assessments/enums/assessment.enum';
import { FileMetadata, FileMetadataSchema } from './FileMetadata.schema';

@Schema()
export class Assessment extends Document {
  @Prop({ required: true })
  point: string;

  @Prop({ required: true })
  time: number;

  @Prop({ enum: QuestionType })
  questionType: QuestionType;

  @Prop({ enum: QuestionOption })
  questionOption: QuestionOption;

  @Prop({ required: true })
  question: string;

  @Prop({ schema: FileMetadataSchema })
  uploadedFiles: FileMetadata[];

  @Prop({ required: true })
  answer: string;

  @Prop()
  explanation: string;
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
