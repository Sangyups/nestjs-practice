import { Module } from '@nestjs/common';
import { MessagesController } from '@src/messages/messages.controller';
import { MessagesRepository } from '@src/messages/messages.repository';
import { MessagesService } from '@src/messages/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
