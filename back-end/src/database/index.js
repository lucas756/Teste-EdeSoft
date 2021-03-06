import Sequelize from 'sequelize';

import User from "../app/models/User"
import Animal from "../app/models/Animais"
import Relation from "../app/models/Relation"

import databaseConfig from '../config/database';

const models = [User, Animal, Relation];

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
