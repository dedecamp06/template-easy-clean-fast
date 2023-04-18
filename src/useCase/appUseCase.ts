import {
  errorResponse,
  HttpResponse,
  successResponse,
} from '@/helpers/contracts';
import { UseCase } from '@/helpers/useCase'
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppUseCase implements UseCase {
  constructor() { }

  async handle(params?: AppUseCase.Params): Promise<HttpResponse> {
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
