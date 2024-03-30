import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { MulterFile } from 'src/assessments/dtos/file.model';

@Injectable()
export class Base64Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.body.files) {
      req.body.uploadedFiles = [];
      const uploadedFileds = req.body.files.map((file: MulterFile) => ({
        originalname: file.originalname,
        data: file.buffer.toString('base64'), // Convert buffer to base64 string
        contentType: file.mimetype,
        size: file.size,
      }));
      req.body.uploadedFiles = uploadedFileds;
      //   for (const file of req.body.files) {
      //     const base64File = {
      //       originalname: file.originalname,
      //       mimetype: file.mimetype,
      //       size: file.size,
      //       base64: file.buffer.toString('base64'),
      //     };
      //     req.body.uploadedFiles.push(base64File);
      //   }
    }
    next();
  }
}
