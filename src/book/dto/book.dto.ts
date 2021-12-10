import { ApiProperty } from '@nestjs/swagger'

export class createBookDto {
  @ApiProperty({ example: 'exhalation' })
  readonly title: string
  @ApiProperty({ example: 'novela' })
  readonly genre: string
  @ApiProperty({ example: 'novela de ciencia ficción ...' })
  readonly description: string
  @ApiProperty({ example: 'Chiang, Ted' })
  readonly author: string
  @ApiProperty({ example: 'Narrativa Sexto Piso' })
  readonly publisher: string
  @ApiProperty({ example: 348 })
  readonly pages: number
  @ApiProperty({
    example: 'https://imagessl3.casadellibro.com/a/l/t5/93/9788417517793.jpg',
  })
  readonly image_url: string
}

export class updateBookDto {
  readonly id: number
  readonly title: string
  readonly genre: string
  readonly description: string
  readonly author: string
  readonly publisher: string
  readonly pages: string
  readonly image_url: string
}
