import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppUseCase } from '../useCase/appUseCase';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppUseCase],
})
export class AppModule {}
