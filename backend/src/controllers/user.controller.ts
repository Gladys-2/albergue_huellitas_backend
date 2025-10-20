import { Request, Response } from "express";
import { Usuario } from "../models/user.model";
import bcrypt from "bcrypt";

{/* Crear usuario normal */}
export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido_paterno, apellido_materno, cedula_identidad, telefono, correo_electronico, contrasena, rol, genero, estado } = req.body;

    const existe = await Usuario.findOne({ where: { correo_electronico } });
    if (existe) return res.status(400).json({ message: "Correo ya registrado" });

    const hash = await bcrypt.hash(contrasena, 10);

    const usuario = await Usuario.create({
      nombre,
      apellido_paterno,
      apellido_materno,
      cedula_identidad,
      telefono,
      correo_electronico,
      contrasena: hash,
      rol: rol || "usuario",
      genero,
      estado: estado || "Activo"
    });

    const { contrasena: _, ...usuarioSinContrasena } = usuario.get({ plain: true });
    res.json({ message: "Usuario creado exitosamente", usuario: usuarioSinContrasena });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

{/*Crear administrador */}
export const crearAdministrador = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena } = req.body;

    const existe = await Usuario.findOne({ where: { correo_electronico } });
    if (existe) return res.status(400).json({ message: "Correo ya registrado" });

    const hash = await bcrypt.hash(contrasena, 10);

    const admin = await Usuario.create({
      nombre,
      apellido_paterno,
      apellido_materno,
      correo_electronico,
      contrasena: hash,
      rol: "administrador"
    });

    const { contrasena: _, ...adminSinContrasena } = admin.get({ plain: true });
    res.json({ message: "Administrador creado exitosamente", admin: adminSinContrasena });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear administrador", error });
  }
};

{/*Obtener todos los usuarios*/}
export const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll({ attributes: { exclude: ["contrasena"] } });
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
};

{/*Eliminar usuario*/}
export const eliminarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resultado = await Usuario.destroy({ where: { id } });
    if (!resultado) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar usuario", error });
  }
};

{/*Actualizar usuario*/}
export const actualizarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, apellido_paterno, apellido_materno, cedula_identidad, telefono, genero, rol, estado } = req.body;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    await usuario.update({ nombre, apellido_paterno, apellido_materno, cedula_identidad, telefono, genero, rol, estado });
    const { contrasena: _, ...usuarioSinContrasena } = usuario.get({ plain: true });
    res.json({ message: "Usuario actualizado correctamente", usuario: usuarioSinContrasena });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar usuario", error });
  }
};
