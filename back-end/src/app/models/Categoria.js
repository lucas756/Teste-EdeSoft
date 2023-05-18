import Sequelize, { Model } from 'sequelize';


class Categoria extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                com_americanas: Sequelize.FLOAT,
                com_magalu: Sequelize.FLOAT,
            },
            {
                sequelize,
            }
        );

        return this;
    }

}
export default Categoria;
