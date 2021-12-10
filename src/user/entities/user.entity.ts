import { Encryptation } from '../../common/utils/encryptation.helper'
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ nullable: true })
  photo: string

  @Column({ nullable: true })
  role: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await Encryptation.encryptPassword(this.password)
  }
}
