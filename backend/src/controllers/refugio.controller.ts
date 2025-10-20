import { Request, Response } from "express";
import Refugio from "../models/refugio.model";

export const getRefugios = async (req: Request, res: Response) => {
  try {
    const refugios = await Refugio.findAll();
    res.json(refugios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener refugios", error });
  }
};

export const crearRefugio = async (req: Request, res: Response) => {
  try {
    const { nombre, direccion, telefono, correo } = req.body;
    const newRefugio = await Refugio.create({ nombre, direccion, telefono, correo });
    res.status(201).json(newRefugio);
  } catch (error) {
    res.status(500).json({ message: "Error al crear refugio", error });
  }
};

export const actualizarRefugio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, direccion, telefono, correo } = req.body;
    const refugio = await Refugio.findByPk(id);
    if (!refugio) return res.status(404).json({ message: "Refugio no encontrado" });

    await refugio.update({ nombre, direccion, telefono, correo });
    res.json(refugio);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar refugio", error });
  }
};

export const eliminarRefugio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const refugio = await Refugio.findByPk(id);
    if (!refugio) return res.status(404).json({ message: "Refugio no encontrado" });

    await refugio.destroy();
    res.json({ message: "Refugio eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar refugio", error });
  }
};