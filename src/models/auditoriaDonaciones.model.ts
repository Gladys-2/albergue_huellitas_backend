import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Donacion from "./donacion.model";

const AuditoriaDonaciones = sequelize.define(
  "AuditoriaDonaciones",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    usuario_responsable: { type: DataTypes.STRING },
    accion: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: "auditoria_donaciones", timestamps: false }
);

Donacion.hasMany(AuditoriaDonaciones, { foreignKey: "donacion_id" });
AuditoriaDonaciones.belongsTo(Donacion, { foreignKey: "donacion_id" });

export default AuditoriaDonaciones;