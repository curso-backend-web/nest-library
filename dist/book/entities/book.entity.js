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
exports.Book = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Book = class Book {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 99 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'exhalation' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'novela' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'novela de ciencia ficción ...' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Chiang, Ted' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Narrativa Sexto Piso' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "publisher", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '348 pags' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://imagessl3.casadellibro.com/a/l/t5/93/9788417517793.jpg',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Book.prototype, "available", void 0);
Book = __decorate([
    (0, typeorm_1.Entity)()
], Book);
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map