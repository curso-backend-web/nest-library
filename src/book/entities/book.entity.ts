import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: 'exhalation' })
  @Column()
  title: string

  @ApiProperty({ example: 'novela' })
  @Column()
  genre: string

  @ApiProperty({ example: 'novela de ciencia ficción ...' })
  @Column()
  description: string

  @ApiProperty({ example: 'Chiang, Ted' })
  @Column()
  author: string

  @ApiProperty({ example: 'Narrativa Sexto Piso' })
  @Column()
  publisher: string

  @ApiProperty({ example: '348 pags' })
  @Column()
  pages: number

  @ApiProperty({
    example: 'https://imagessl3.casadellibro.com/a/l/t5/93/9788417517793.jpg',
  })
  @Column()
  image_url: string

  @ApiProperty({ example: true })
  @Column({ default: true })
  available: boolean
}
