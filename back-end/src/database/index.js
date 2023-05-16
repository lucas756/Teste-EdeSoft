import Sequelize from 'sequelize';

import User from "../app/models/Magalu"
import Markets from '../app/models/Markets';

import databaseConfig from '../config/database';

const models = [User, Markets];

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
