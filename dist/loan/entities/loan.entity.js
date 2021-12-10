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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const book_entity_1 = require("../../book/entities/book.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Loan = class Loan {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Loan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, (book) => book.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", book_entity_1.Book)
], Loan.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Loan.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime' }),
    __metadata("design:type", Date)
], Loan.prototype, "loanDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Loan.prototype, "returnDate", void 0);
Loan = __decorate([
    (0, typeorm_1.Entity)()
], Loan);
exports.Loan = Loan;
//# sourceMappingURL=loan.entity.js.map