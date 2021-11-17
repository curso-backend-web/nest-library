import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpCode, HttpStatus, Put } from '@nestjs/common'
import { LoanService } from './loan.service'
import { CreateLoanDto } from './dto/create-loan.dto'

// import { UpdateLoanDto } from './dto/update-loan.dto'

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  async create(@Body() createLoanDto: CreateLoanDto) {
    try {
      return await this.loanService.create(createLoanDto)
      
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error.message
      }, HttpStatus.FORBIDDEN)
    }
  }

  @Patch(':loanId')
  async update(@Param('loanId') loanId: number){
    return await this.loanService.update(loanId)
  }

}
