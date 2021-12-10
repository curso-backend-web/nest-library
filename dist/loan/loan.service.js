"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("../book/book.service");
const typeorm_1 = require("typeorm");
const loan_entity_1 = require("./entities/loan.entity");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("@nestjs/typeorm");
let LoanService = class LoanService {
    constructor(loanRepository, bookService, userService) {
        this.loanRepository = loanRepository;
        this.bookService = bookService;
        this.userService = userService;
    }
    async create(loanDto) {
        const loan = new loan_entity_1.Loan();
        const book = await this.bookService.findBook(loanDto.bookId);
        const user = await this.userService.findOne(loanDto.userId);
        let newLoan;
        try {
            if (!book.available)
                throw new Error('Book Not Available for Loan');
            book.available = false;
            loan.book = book;
            loan.user = user;
            Object.assign(loan, loanDto);
            await (0, typeorm_1.getConnection)().transaction(async (manager) => {
                newLoan = await manager.save(loan);
                await manager.save(book);
            });
            return newLoan;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async findLoan(id, loan) {
        console.log(loan);
        return await this.loanRepository.find({
            where: {
                book: loan.bookId,
                user: loan.userId,
                returnDate: null,
            },
            relations: ['book'],
        });
    }
    async update(id, loanDto) {
        try {
            const [loan] = await this.findLoan(id, loanDto);
            if (loan === undefined)
                throw new Error('No borrowed books');
            const book = await this.bookService.findBook(loan.book.id);
            let newLoan;
            if (book.available)
                return;
            book.available = true;
            loan.returnDate = new Date();
            await (0, typeorm_1.getConnection)().transaction(async (manager) => {
                newLoan = await manager.save(loan);
                await manager.save(book);
            });
            return newLoan;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
LoanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(loan_entity_1.Loan)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        book_service_1.BookService,
        user_service_1.UserService])
], LoanService);
exports.LoanService = LoanService;
//# sourceMappingURL=loan.service.js.map