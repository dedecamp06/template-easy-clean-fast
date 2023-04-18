import {
  UseCase,
  errorResponse,
  HttpResponse,
  successResponse,
} from '@/presentation/contracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppUseCase implements UseCase {
  constructor() { }

  async handle(params: appUseCase.Params): Promise<HttpResponse> {
    try {
      const result = 'Hello World'
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}

export namespace AppUseCase {
  export type Params = any
}
