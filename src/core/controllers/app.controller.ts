import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from '../../useCase/appUseCase';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(
    @Res() res,
  ): string {
    const index = await this.appService.handle();
    return res.status(index.status).json(index)
  }
}
