import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Usuario = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido_paterno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido_materno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cedula_identidad: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: "usuario"
  },
  genero: {
    type: DataTypes.CHAR(1)
  }
}, {
  tableName: "usuarios",
  timestamps: false
});

export { Usuario };
export default Usuario;