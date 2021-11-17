import { Module } from '@nestjs/common'
import { LoanService } from './loan.service'
import { LoanController } from './loan.controller'
import { BookModule } from 'src/book/book.module'
import { UserModule } from 'src/user/user.module'

@Module({
  imports:[BookModule, UserModule],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
