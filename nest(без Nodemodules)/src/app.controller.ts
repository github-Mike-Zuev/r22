import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {cart} from './cart';
@Controller()export class AppController { constructor(private readonly appService: AppService) {}
  @Get() getHello() { return {cart}; } }
