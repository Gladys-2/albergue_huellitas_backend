import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Usuario from "./user.model";
import Animal from "./animal.model";

const Adopcion = sequelize.define("adopciones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, references: { model: "usuarios", key: "id" } },
  animal_id: { type: DataTypes.INTEGER, references: { model: "animales", key: "id" } },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  estado: { type: DataTypes.STRING, defaultValue: "Pendiente" }
}, {
  tableName: "adopciones",
  timestamps: false
});

Adopcion.belongsTo(Usuario, { foreignKey: "usuario_id" });
Adopcion.belongsTo(Animal, { foreignKey: "animal_id" });
export default Adopcion;