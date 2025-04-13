import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../modules/users/user.entity';
import { QQAccount } from '../modules/qq-accounts/qq-account.entity';
import { Credential } from '../modules/credentials/credential.entity';

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.get('DB_HOST', 'localhost'),
  port: configService.get('DB_PORT', 3306),
  username: configService.get('DB_USERNAME', 'root'),
  password: configService.get('DB_PASSWORD', 'root'),
  database: configService.get('DB_DATABASE', 'nest_user_management'),
  entities: [User, QQAccount, Credential],
  synchronize: configService.get('DB_SYNC', true), // 开发环境使用，生产环境需要设置为 false
  logging: true,
}); 