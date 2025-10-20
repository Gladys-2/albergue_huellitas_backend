import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Usuario from "./user.model";

const Donacion = sequelize.define("donaciones", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, references: { model: "usuarios", key: "id" } },
  monto: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  tipo: { type: DataTypes.STRING },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "donaciones",
  timestamps: false
});

Donacion.belongsTo(Usuario, { foreignKey: "usuario_id" });
export default Donacion;