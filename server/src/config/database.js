require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: process.env.DB_STORAGE,
  logging: process.env.NODE_ENV === 'development',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
