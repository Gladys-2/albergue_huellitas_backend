import { Request, Response } from "express";
import { Usuario } from "../models/user.model";
import bcrypt from "bcrypt";

export const loginUsuario = async (req: Request, res: Response) => {
  try {
    const { correo_electronico, contrasena } = req.body;

    const usuario = await Usuario.findOne({ where: { correo_electronico } });

    if (!usuario) {
      return res.status(401).json({ message: "Usuario o contraseña incorrecta" });
    }

    // ✅ Acceder correctamente a la contraseña
    const hashContrasena = usuario.getDataValue("contrasena");
    const match = await bcrypt.compare(contrasena, hashContrasena);

    if (!match) {
      return res.status(401).json({ message: "Usuario o contraseña incorrecta" });
    }

    const usuarioSinContrasena = usuario.get({ plain: true });
    delete usuarioSinContrasena.contrasena;

    res.json({
      message: "Login exitoso",
      usuario: usuarioSinContrasena,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el login", error });
  }
};