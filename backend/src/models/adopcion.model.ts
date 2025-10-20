import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Usuario from "./user.model";
import Animal from "./animal.model";

const Adopcion = sequelize.define(
  "Adopcion",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    estado: { 
      type: DataTypes.STRING, 
      defaultValue: "Pendiente",
      validate: { isIn: [["Pendiente","Aprobada","Rechazada"]] }
    },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: "adopciones", timestamps: false }
);

Usuario.hasMany(Adopcion, { foreignKey: "usuario_id" });
Adopcion.belongsTo(Usuario, { foreignKey: "usuario_id" });

Animal.hasOne(Adopcion, { foreignKey: "animal_id" });
Adopcion.belongsTo(Animal, { foreignKey: "animal_id" });

export default Adopcion;