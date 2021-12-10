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
import { ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

// import { UpdateLoanDto } from './dto/update-loan.dto'

@UseFilters(new HttpExceptionFilter())
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('access-token')
@Controller('loan')
@Roles('Admin')
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
