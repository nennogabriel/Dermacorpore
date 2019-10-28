const dotenv = require('dotenv');

dotenv.config({
  path:
    ['test', 'development'].indexOf(process.env.NODE_ENV) >= 0
      ? `.env.${process.env.NODE_ENV}.ini`
      : '.env',
});
