import { BookService } from '../book/book.service';
import { Repository } from 'typeorm';
import { Loan } from './entities/loan.entity';
import { UserService } from 'src/user/user.service';
import { LoanDto } from './dto/loan.dto';
export declare class LoanService {
    private loanRepository;
    private bookService;
    private userService;
    constructor(loanRepository: Repository<Loan>, bookService: BookService, userService: UserService);
    create(loanDto: any): Promise<Loan>;
    findLoan(id: number, loan: LoanDto): Promise<Loan[]>;
    update(id: any, loanDto: any): Promise<Loan>;
}
