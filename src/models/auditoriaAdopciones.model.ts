import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Adopcion from "./adopcion.model";

const AuditoriaAdopciones = sequelize.define(
  "AuditoriaAdopciones",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    usuario_responsable: { type: DataTypes.STRING },
    accion: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: "auditoria_adopciones", timestamps: false }
);

Adopcion.hasMany(AuditoriaAdopciones, { foreignKey: "adopcion_id" });
AuditoriaAdopciones.belongsTo(Adopcion, { foreignKey: "adopcion_id" });

export default AuditoriaAdopciones;