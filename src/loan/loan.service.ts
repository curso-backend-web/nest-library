import { Injectable } from '@nestjs/common'
import { BookService } from '../book/book.service'
import { getConnection } from 'typeorm'

import { Loan } from './entities/loan.entity'
import { UserService } from 'src/user/user.service'
// import { CreateLoanDto } from './dto/create-loan.dto';
// import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoanService {
  constructor(
    private bookService: BookService,
    private userService: UserService
    ){}
  async create(loanDTO): Promise<Loan> {
    const loan = new Loan()
    const book = await this.bookService.findBook(loanDTO.bookId)
    const user = await this.userService.findOne(loanDTO.userId)
    let newLoan: Loan

    book.available = false
    loan.book = book
    loan.user = user
    
    
    Object.assign(loan,loanDTO)

    try {
      await getConnection().transaction(async manager =>{

          newLoan = await manager.save(loan)
          await manager.save(book)
        })

      return newLoan
    } catch (error) {
      throw error
    }


    // return `This action adds a new loan ${loanDTO}`
  }

  // findAll() {
  //   return `This action returns all loan`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} loan`;
  // }

  // update(id: number, updateLoanDto: UpdateLoanDto) {
  //   return `This action updates a #${id} loan`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} loan`;
  // }
}
