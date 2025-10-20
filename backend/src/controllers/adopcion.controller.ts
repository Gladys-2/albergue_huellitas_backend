import { Request, Response } from "express";
import Adopcion from "../models/adopcion.model";

export const crearAdopcion = async (req: Request, res: Response) => {
  try {
    const { usuario_id, animal_id } = req.body;

    const nuevaAdopcion = await Adopcion.create({
      usuario_id,
      animal_id,
    });

    res.status(201).json(nuevaAdopcion);
  } catch (error) {
    console.error("Error al crear adopcion:", error);
    res.status(500).json({ message: "Error al crear adopcion", error });
  }
};

export const obtenerAdopciones = async (req: Request, res: Response) => {
  try {
    const adopciones = await Adopcion.findAll();
    res.json(adopciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener adopciones", error });
  }
};