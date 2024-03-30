import { IsNotEmpty, IsString } from 'class-validator';
import { QuestionOption, QuestionType } from '../enums/assessment.enum';
import { MulterFile } from './file.model';

export class CreateAssessmentDto {
  @IsString()
  @IsNotEmpty()
  point: string;
  @IsNotEmpty()
  time: number;
  @IsString()
  @IsNotEmpty()
  questionType: QuestionType;
  @IsString()
  @IsNotEmpty()
  questionOption: QuestionOption;
  @IsString()
  @IsNotEmpty()
  question: string;
  uploadedFiles: MulterFile[];
  @IsString()
  @IsNotEmpty()
  answer: string;
  @IsString()
  explanation: string;
}
