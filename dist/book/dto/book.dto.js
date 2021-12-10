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
exports.updateBookDto = exports.createBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class createBookDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'exhalation' }),
    __metadata("design:type", String)
], createBookDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'novela' }),
    __metadata("design:type", String)
], createBookDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'novela de ciencia ficción ...' }),
    __metadata("design:type", String)
], createBookDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Chiang, Ted' }),
    __metadata("design:type", String)
], createBookDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Narrativa Sexto Piso' }),
    __metadata("design:type", String)
], createBookDto.prototype, "publisher", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '348 pags' }),
    __metadata("design:type", String)
], createBookDto.prototype, "pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://imagessl3.casadellibro.com/a/l/t5/93/9788417517793.jpg',
    }),
    __metadata("design:type", String)
], createBookDto.prototype, "image_url", void 0);
exports.createBookDto = createBookDto;
class updateBookDto {
}
exports.updateBookDto = updateBookDto;
//# sourceMappingURL=book.dto.js.map