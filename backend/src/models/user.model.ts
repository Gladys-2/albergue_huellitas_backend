import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Usuario = sequelize.define(
  "Usuario",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido_paterno: { type: DataTypes.STRING, allowNull: false },
    apellido_materno: { type: DataTypes.STRING, allowNull: false },
    cedula_identidad: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    correo_electronico: { type: DataTypes.STRING, allowNull: false, unique: true },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    rol: { 
      type: DataTypes.STRING, 
      defaultValue: "usuario", 
      validate: { isIn: [["usuario","administrador"]] } 
    },
    genero: { 
      type: DataTypes.CHAR(1), 
      validate: { isIn: [["M","F","O"]] } 
    },
    estado: { 
      type: DataTypes.STRING, 
      defaultValue: "Activo", 
      validate: { isIn: [["Activo","Inactivo"]] } 
    }
  },
  {
    tableName: "usuarios",
    timestamps: true,               
    createdAt: "fecha_creacion", 
    updatedAt: "fecha_actualizacion"
  }
);

export { Usuario };
export default Usuario;