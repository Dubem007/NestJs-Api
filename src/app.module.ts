import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssessmentsModule } from './/assessments/assessment.module';
import { MulterModule } from '@nestjs/platform-express';
import { Base64Middleware } from './Middleware/file-to-base64.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/simplifiedUx_db'),
    AssessmentsModule,
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Base64Middleware).forRoutes('questions');
  }
}
