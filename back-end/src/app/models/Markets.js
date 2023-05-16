import Sequelize, { Model } from 'sequelize';


class Markets extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        porcentagem: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    
    return this;
  }
  
}
export default Markets;
