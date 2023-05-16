require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'precos',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
