import Sequelize, { Model } from 'sequelize';


class Vias extends Model {
  static init(sequelize) {
    super.init(
      {
        peso_inicial: Sequelize.FLOAT,
        peso_final: Sequelize.FLOAT,
        red: Sequelize.FLOAT,
        green: Sequelize.FLOAT,
        yellow: Sequelize.FLOAT,
        fulfillment: Sequelize.FLOAT,
        value: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    
    return this;
  }
  
}
export default Vias;
