import { PartialType } from "@nestjs/mapped-types"
import { LoginUserDto } from "./login-user.dto"

export class CreateUserDto extends PartialType(LoginUserDto) {
    readonly photo: string
}
