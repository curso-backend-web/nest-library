import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  UseFilters,
  UseGuards,
} from '@nestjs/common'
import { LoanService } from './loan.service'
import { LoanDto } from './dto/loan.dto'
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { Roles } from '../auth/decorators/roles.decorator'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Role } from '../auth/model/enum.decorator'

// import { UpdateLoanDto } from './dto/update-loan.dto'

@UseFilters(new HttpExceptionFilter())
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('access-token')
@Controller('loan')
@Roles(Role.ADMIN)
export class LoanController {
  constructor(private readonly loanService: LoanService) {}
  @Post()
  async create(@Body() loanDto: LoanDto) {
    return await this.loanService.create(loanDto)
  }

  @Patch(':loanId')
  async update(@Param('loanId') loanId: number, @Body() loanDto: LoanDto) {
    return await this.loanService.update(loanId, loanDto)
  }
}
