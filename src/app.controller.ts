import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/email')
  email(@Body() emailData) {
    const nickname = emailData.nickname
    console.log(process.env.VERIFY_CODE)
    return { name: nickname, extra: process.env.VERIFY_CODE }    
    // return this.appService.createProduct(productData)
  }
}
