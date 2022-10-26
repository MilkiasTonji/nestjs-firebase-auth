import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express'
import {join} from 'path'
import * as hbs from 'hbs';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger('App')
  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  hbs.registerPartials(join(__dirname, '..', 'views/partials'))
  app.setViewEngine('hbs')
  app.set('view options', { layout: 'main' });

  await app.listen(3000);

  logger.log('Application started on port 3000');

}
bootstrap();
