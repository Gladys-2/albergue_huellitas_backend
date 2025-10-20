import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Usuario from "./user.model";

const Donacion = sequelize.define(
  "Donacion",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    monto: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    tipo: { type: DataTypes.STRING },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: "donaciones", timestamps: false }
);

Usuario.hasMany(Donacion, { foreignKey: "usuario_id" });
Donacion.belongsTo(Usuario, { foreignKey: "usuario_id" });

export default Donacion;