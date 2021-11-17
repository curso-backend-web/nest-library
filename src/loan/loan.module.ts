import { Module } from '@nestjs/common'
import { LoanService } from './loan.service'
import { LoanController } from './loan.controller'
import { BookModule } from 'src/book/book.module'

@Module({
  imports:[BookModule],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
