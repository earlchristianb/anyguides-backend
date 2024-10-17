import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppConfig} from "./common/config/app.config";
import {User} from "./user/entities/user.entity";
import {ConfigifyModule} from "@itgorillaz/configify/dist";
import { UserController } from './user/user.controller';
import {UserModule} from "./user/user.module";

@Module({
  imports: [
      ConfigifyModule.forRootAsync({
      }),
      TypeOrmModule.forRootAsync({
          inject: [AppConfig],
          imports: [ConfigifyModule],
          extraProviders: [],
          useFactory: (appConfig: AppConfig) => ({
              type: 'mongodb',
              url: appConfig.dbUrl,
              logging: true,
              entities: [User],
              synchronize: true,

          }),
      }),
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
