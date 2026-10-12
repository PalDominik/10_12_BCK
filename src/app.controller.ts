import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { error } from 'node:console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Query('title') title: string = 'Valami', @Query('bgcolor') hatt : string = '#BAAA99',@Query('eletkor') Eletkor : string) {
    // if(!title)
    // {
    //   title = 'valami';
    // }
    if(!Eletkor)
    {
      throw new Error("Gatya")
    }
    const eletkorSza = parseInt(Eletkor)
    return {
      title: title, // || 'Valami'
      hatt: hatt

    }
  }
}
