require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
