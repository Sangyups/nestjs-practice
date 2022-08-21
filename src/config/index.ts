import 'dotenv/config';

const appConfig = {
  DB_HOST: process.env.DB_HOST || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_PORT: +(process.env.DB_PORT || '3306'),
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
};

export default appConfig;
