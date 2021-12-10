import { registerAs } from '@nestjs/config'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

export default registerAs('db', () => {
  const connectionOption: MysqlConnectionOptions = {
    type: 'mysql',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
  }

  if (process.env.CLEARDB_DATABASE_URL) {
    Object.assign(connectionOption, { url: process.env.CLEARDB_DATABASE_URL })
  } else {
    Object.assign(connectionOption, {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
    })
  }
  return connectionOption
})
