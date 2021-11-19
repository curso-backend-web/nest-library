import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpCode,
  HttpStatus,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common'
import { LoanService } from './loan.service'
import { LoanDto } from './dto/loan.dto'
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter'
import { AuthGuard } from '@nestjs/passport'

// import { UpdateLoanDto } from './dto/update-loan.dto'

@UseFilters(new HttpExceptionFilter())
@UseGuards(AuthGuard('jwt'))
@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}
  @Post()
  async create(@Body() loanDto: LoanDto) {
    return await this.loanService.create(LoanDto)
  }

  @Patch(':loanId')
  async update(@Param('loanId') loanId: number, @Body() loanDto: LoanDto) {
    return await this.loanService.update(loanId, loanDto)
  }
}
