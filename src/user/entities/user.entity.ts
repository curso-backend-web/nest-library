import { Encryptation } from "../../common/utils/encryptation.helper"
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    email: string

    @Column()
    password: string

    @Column({nullable:true})
    photo: string

    @BeforeInsert()
    async hashPassword() {
        this.password = await Encryptation.encryptPassword(this.password)
    }

}
