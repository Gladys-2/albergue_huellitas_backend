import { Request, Response } from "express";
import AuditoriaAdopciones from "../models/auditoriaAdopciones.model";
import Adopcion from "../models/adopcion.model";

export const getAuditoriaAdopciones = async (req: Request, res: Response) => {
  try {
    const registros = await AuditoriaAdopciones.findAll({ include: [Adopcion] });
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener auditoría de adopciones", error });
  }
};

export const crearAuditoriaAdopcion = async (req: Request, res: Response) => {
  try {
    const { adopcion_id, usuario_responsable, accion, descripcion } = req.body;
    const registro = await AuditoriaAdopciones.create({ adopcion_id, usuario_responsable, accion, descripcion });
    res.status(201).json(registro);
  } catch (error) {
    res.status(500).json({ message: "Error al crear auditoría", error });
  }
};