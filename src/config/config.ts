import { registerAs } from '@nestjs/config'

export default registerAs('database', () => {
  return {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: ['dist/**/*.entity.js'],
    synchronize: false,
  }
})
