import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from 'src/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: appConfig.DB_NAME,
      host: appConfig.DB_HOST,
      port: appConfig.DB_PORT,
      username: appConfig.DB_USERNAME,
      password: appConfig.DB_PASSWORD,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
