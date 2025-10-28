import { Request, Response } from "express";
import AuditoriaDonaciones from "../models/auditoriaDonaciones.model";
import Donacion from "../models/donacion.model";

export const getAuditoriaDonaciones = async (req: Request, res: Response) => {
  try {
    const registros = await AuditoriaDonaciones.findAll({ include: [Donacion] });
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener auditoría de donaciones", error });
  }
};

export const crearAuditoriaDonacion = async (req: Request, res: Response) => {
  try {
    const { donacion_id, usuario_responsable, accion, descripcion } = req.body;
    const registro = await AuditoriaDonaciones.create({ donacion_id, usuario_responsable, accion, descripcion });
    res.status(201).json(registro);
  } catch (error) {
    res.status(500).json({ message: "Error al crear auditoría", error });
  }
};
