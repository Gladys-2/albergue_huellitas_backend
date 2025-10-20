import { Request, Response } from "express";
import AuditoriaUsuarios from "../models/auditoriaUsuarios.model";
import Usuario from "../models/user.model";

export const getAuditoriaUsuarios = async (req: Request, res: Response) => {
  try {
    const registros = await AuditoriaUsuarios.findAll({ include: [Usuario] });
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener auditoría de usuarios", error });
  }
};

export const crearAuditoriaUsuario = async (req: Request, res: Response) => {
  try {
    const { usuario_id, accion, descripcion } = req.body;
    const registro = await AuditoriaUsuarios.create({ usuario_id, accion, descripcion });
    res.status(201).json(registro);
  } catch (error) {
    res.status(500).json({ message: "Error al crear auditoría", error });
  }
};