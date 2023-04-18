import {
  Controller,
  errorResponse,
  HttpResponse,
  successResponse,
} from '@/presentation/contracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class appUseCase implements Controller {
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

export namespace appUseCase {
  export type Params = any
}
