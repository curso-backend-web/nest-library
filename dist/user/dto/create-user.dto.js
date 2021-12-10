"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const login_dto_1 = require("../../auth/model/login.dto");
class CreateUserDto extends (0, mapped_types_1.PartialType)(login_dto_1.LoginUserDto) {
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map