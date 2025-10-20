import { Request, Response } from "express";
import Refugio from "../models/refugio.model";

export const obtenerRefugios = async (req: Request, res: Response) => {
  try {
    const refugios = await Refugio.findAll();
    res.json(refugios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener refugios", error });
  }
};

export const crearRefugio = async (req: Request, res: Response) => {
  try {
    const { nombre, direccion, telefono, correo } = req.body;
    const refugio = await Refugio.create({ nombre, direccion, telefono, correo });
    res.json(refugio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear refugio", error });
  }
};

export const eliminarRefugio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resultado = await Refugio.destroy({ where: { id } });
    if (!resultado) return res.status(404).json({ message: "Refugio no encontrado" });
    res.json({ message: "Refugio eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar refugio", error });
  }
};