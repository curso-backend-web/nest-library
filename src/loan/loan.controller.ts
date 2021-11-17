import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { LoanService } from './loan.service'
import { CreateLoanDto } from './dto/create-loan.dto'
// import { UpdateLoanDto } from './dto/update-loan.dto'

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  create(@Body() createLoanDto: CreateLoanDto) {
    return this.loanService.create(createLoanDto)
  }
}
