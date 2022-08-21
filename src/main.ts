import { NestFactory } from '@nestjs/core';
import appConfig from 'src/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(appConfig.APP_PORT);
}
bootstrap();
