import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Player extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING(50))
  pseudo: string;

  @Unique
  @Column
  email: string;

  @Column
  password: string;
}
