import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Refugio from "./refugio.model";

const Animal = sequelize.define(
  "Animal",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    especie: { type: DataTypes.STRING },
    edad: { type: DataTypes.INTEGER },
    estado: { 
      type: DataTypes.STRING, 
      defaultValue: "Disponible",
      validate: { isIn: [["Disponible","Adoptado","En cuidado"]] }
    },
    foto: { type: DataTypes.STRING }
  },
  { tableName: "animales", timestamps: false }
);

Refugio.hasMany(Animal, { foreignKey: "refugio_id" });
Animal.belongsTo(Refugio, { foreignKey: "refugio_id" });

export default Animal;