import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CreateAssessmentDto } from './dtos/CreateAssessment.dto';
import { AssessmentService } from './assessment.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MulterFile } from './dtos/file.model';

@Controller('questions')
export class AssessmentController {
  constructor(private assessmentService: AssessmentService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('uploadedFiles'))
  async createQuestion(
    @Body() createQuestionDto: CreateAssessmentDto,
    @UploadedFiles() uploadedFiles: MulterFile[],
  ) {
    const responds = await this.assessmentService.createAssessment({
      ...createQuestionDto,
      uploadedFiles: uploadedFiles,
    });

    return responds;
  }
}
