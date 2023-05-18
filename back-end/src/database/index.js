import Sequelize from 'sequelize';

import User from "../app/models/Magalu"
import Markets from '../app/models/Markets';

import databaseConfig from '../config/database';
import Vias from '../app/models/Via';
import Americanas from '../app/models/Americanas';
import Categoria from '../app/models/Categoria';

const models = [
  User,
  Markets,
  Vias,
  Americanas,
  Categoria
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database();
