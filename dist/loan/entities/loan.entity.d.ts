import { Book } from '../../book/entities/book.entity';
import { User } from '../../user/entities/user.entity';
export declare class Loan {
    id: number;
    book: Book;
    user: User;
    loanDate: Date;
    returnDate: Date;
}
