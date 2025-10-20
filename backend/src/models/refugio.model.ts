import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Refugio = sequelize.define("refugios", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  direccion: { type: DataTypes.TEXT, allowNull: false },
  telefono: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING },
  fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  fecha_actualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: "refugios",
  timestamps: false
});

export default Refugio;