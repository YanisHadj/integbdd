import { Sequelize } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import { Character } from 'src/character/character.entity';

export const dbProvider = [
  {
    provide: 'SEQUELISZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 8889,
        username: '5iw_nest',
        password: 'root',
        database: '5iw_nest',
      });
      sequelize.addModels([Player, Character]);
      Player.hasMany(Character); // un joueur est associé a plusieur perso (mise en relation des tables)
      Character.belongsTo(Player); // les persos sont associé a un joueur
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
