import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Get Hello World!' })
  @ApiResponse({ status: 200, description: 'Returns Hello World!' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
