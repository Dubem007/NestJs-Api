import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { QuestionOption, QuestionType } from '../enums/assessment.enum';
import { MulterFileResponse } from './file.model';

export class CreateAssessmentResponseDto {
  @IsBoolean()
  status: boolean;
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
  uploadedFiles: MulterFileResponse[];
  @IsString()
  @IsNotEmpty()
  answer: string;
  @IsString()
  explanation: string;
}
