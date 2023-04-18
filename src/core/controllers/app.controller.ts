import { Controller, Get, Res } from '@nestjs/common';
import { AppUseCase } from '@/useCase/appUseCase'
import { HttpResponse } from '@/helpers/contracts';

@Controller()
export class AppController {
  constructor(private readonly appUseCase: AppUseCase) { }

  @Get()
  async getHello(
    @Res() res
    ): Promise<HttpResponse> {
    const index = await this.appUseCase.handle();
    return res.status(index.status).json(index)
  }
}
