import { registerAs } from '@nestjs/config';
export default registerAs('typeorm', () => {

  return ({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    api_key: process.env.API_KEY,
    synchronize: true,
    loggin: true,
    ssl: { rejectUnauthorized: false },
    entities: ['dist/entities/**/*.entity.js'],
  })
});