import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Refugio from "./refugio.model";

const Voluntario = sequelize.define(
  "Voluntario",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    telefono: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING }
  },
  { tableName: "voluntarios", timestamps: false }
);

Refugio.hasMany(Voluntario, { foreignKey: "refugio_id" });
Voluntario.belongsTo(Refugio, { foreignKey: "refugio_id" });

export default Voluntario;