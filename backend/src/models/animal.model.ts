import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Refugio from "./refugio.model";

const Animal = sequelize.define("animales", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  especie: { type: DataTypes.STRING },
  edad: { type: DataTypes.INTEGER },
  estado: { type: DataTypes.STRING, defaultValue: "Disponible" },
  foto: { type: DataTypes.STRING },
  refugio_id: { type: DataTypes.INTEGER, references: { model: "refugios", key: "id" } }
}, {
  tableName: "animales",
  timestamps: false
});

Animal.belongsTo(Refugio, { foreignKey: "refugio_id" });
export default Animal;