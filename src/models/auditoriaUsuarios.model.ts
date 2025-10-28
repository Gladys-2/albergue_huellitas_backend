import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Usuario from "./user.model";

const AuditoriaUsuarios = sequelize.define(
  "AuditoriaUsuarios",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    accion: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: "auditoria_usuarios", timestamps: false }
);

Usuario.hasMany(AuditoriaUsuarios, { foreignKey: "usuario_id" });
AuditoriaUsuarios.belongsTo(Usuario, { foreignKey: "usuario_id" });

export default AuditoriaUsuarios;