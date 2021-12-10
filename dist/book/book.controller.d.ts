import { Request } from 'express';
import { createBookDto } from './dto/book.dto';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findAll(request: Request): Promise<Book[]>;
    createBook(newBook: createBookDto): Promise<Book>;
}
