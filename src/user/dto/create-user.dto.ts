import { PartialType } from '@nestjs/mapped-types'
import { LoginUserDto } from '../../auth/model/login.dto'

export class CreateUserDto extends PartialType(LoginUserDto) {
  readonly photo: string
  readonly role: string
}
