import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('Before request', context);

    return next.handle().pipe(
      map((data: any) => {
        console.log('running before reponse out', data);
      }),
    );
  }
}
