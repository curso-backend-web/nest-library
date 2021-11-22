import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BookModule } from './book/book.module'
import { UserModule } from './user/user.module'
import { LoanModule } from './loan/loan.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configuration from './config/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
    }),
    BookModule,
    UserModule,
    LoanModule,
    AuthModule,
  ],
})
export class AppModule {}
