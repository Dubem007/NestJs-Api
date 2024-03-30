import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assessment } from 'src/schemas/Assessment.schema';
import { CreateAssessmentDto } from './dtos/CreateAssessment.dto';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectModel(Assessment.name) private questionModel: Model<Assessment>,
  ) {}

  async createAssessment({ ...createAssessmentDto }: CreateAssessmentDto) {
    const newPost = new this.questionModel({ ...createAssessmentDto });
    const savedPost = await newPost.save();
    const response = savedPost.toObject(); // Convert to plain JavaScript object
    if (response.uploadedFiles) {
      response.uploadedFiles.forEach((Text) => delete Text.buffer); // Remove buffer property
    }
    return response;
  }
}
