import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QQAccountsService } from './qq-accounts.service';
import { QQAccountsController } from './qq-accounts.controller';
import { QQAccount } from './qq-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QQAccount])],
  controllers: [QQAccountsController],
  providers: [QQAccountsService],
  exports: [QQAccountsService],
})
export class QQAccountsModule {} 