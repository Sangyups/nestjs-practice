import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ComputerModule } from '@src/computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}

bootstrap();
