import { Book } from './entities/book.entity';
import { createBookDto } from './dto/book.dto';
import { Repository } from 'typeorm';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    findAll({ order, limit }?: {
        order?: number;
        limit?: number;
    }): Promise<Book[]>;
    createBook(newBook: createBookDto): Promise<Book>;
    findBook(bookId: any): Promise<Book>;
}
