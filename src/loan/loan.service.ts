import { Injectable } from '@nestjs/common'
import { BookService } from '../book/book.service'
import { getConnection, Repository } from 'typeorm'

import { Loan } from './entities/loan.entity'
import { UserService } from 'src/user/user.service'
import { InjectRepository } from '@nestjs/typeorm'
// import { CreateLoanDto } from './dto/create-loan.dto';
// import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan) private loanRepository:Repository<Loan>,
    private bookService: BookService,
    private userService: UserService
  ) { }
  async create(loanDto): Promise<Loan> {
    const loan = new Loan()
    const book = await this.bookService.findBook(loanDto.bookId)
    const user = await this.userService.findOne (loanDto.userId)
    let newLoan: Loan

    try {

      if (!book.available)
        throw new Error('Book Not Available for Loan')

      book.available = false
      loan.book = book
      loan.user = user
      Object.assign(loan, loanDto)

      await getConnection().transaction(async manager => {

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

  async findOne(id: number):Promise<Loan> {
    return await this.loanRepository.findOne(id, {relations:['book']})
  }

  async update(id): Promise<Loan> {
    const loan = await this.findOne(id)
    console.log(loan)
    const book = await this.bookService.findBook(loan.book.id)
    // const user = await this.userService.findOne(loanDto.userId)
    let newLoan: Loan

    try {

      if (book.available)
        return

      book.available = true
      loan.returnDate = new Date()
      
      

      await getConnection().transaction(async manager => {

        newLoan = await manager.save(loan)
        await manager.save(book)
      })

      return newLoan
    } catch (error) {
      throw error
    }

  }

  // remove(id: number) {
  //   return `This action removes a #${id} loan`;
  // }
}
