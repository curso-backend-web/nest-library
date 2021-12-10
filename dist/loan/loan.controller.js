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
exports.LoanController = void 0;
const common_1 = require("@nestjs/common");
const loan_service_1 = require("./loan.service");
const loan_dto_1 = require("./dto/loan.dto");
const http_exception_filter_1 = require("../common/exceptions/http-exception.filter");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
const enum_decorator_1 = require("../auth/model/enum.decorator");
let LoanController = class LoanController {
    constructor(loanService) {
        this.loanService = loanService;
    }
    async create(loanDto) {
        return await this.loanService.create(loanDto);
    }
    async update(loanId, loanDto) {
        return await this.loanService.update(loanId, loanDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_dto_1.LoanDto]),
    __metadata("design:returntype", Promise)
], LoanController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':loanId'),
    __param(0, (0, common_1.Param)('loanId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, loan_dto_1.LoanDto]),
    __metadata("design:returntype", Promise)
], LoanController.prototype, "update", null);
LoanController = __decorate([
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('loan'),
    (0, roles_decorator_1.Roles)(enum_decorator_1.Role.ADMIN),
    __metadata("design:paramtypes", [loan_service_1.LoanService])
], LoanController);
exports.LoanController = LoanController;
//# sourceMappingURL=loan.controller.js.map