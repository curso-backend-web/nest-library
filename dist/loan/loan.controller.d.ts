import { LoanService } from './loan.service';
import { LoanDto } from './dto/loan.dto';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    create(loanDto: LoanDto): Promise<import("./entities/loan.entity").Loan>;
    update(loanId: number, loanDto: LoanDto): Promise<import("./entities/loan.entity").Loan>;
}
