import { PartialType } from '@nestjs/mapped-types'
import { LoginUserDto } from '../../auth/dto/login.dto'

export class CreateUserDto extends PartialType(LoginUserDto) {
  readonly photo: string
}
