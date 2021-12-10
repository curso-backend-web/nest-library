import { JwtService } from '@nestjs/jwt'
// import { PassportModule } from '@nestjs/passport'
import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from '../../user/user.service'
import { AuthService } from './auth.service'

jest.mock('../../user/user.service')
jest.mock('@nestjs/jwt')
describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UserService, JwtService],
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
