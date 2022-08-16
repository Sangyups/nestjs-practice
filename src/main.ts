import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from '@src/messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}

bootstrap();
