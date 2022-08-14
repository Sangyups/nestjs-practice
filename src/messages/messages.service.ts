import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepo: MessagesRepository) {}

  findAll() {
    return this.messagesRepo.findAll();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
