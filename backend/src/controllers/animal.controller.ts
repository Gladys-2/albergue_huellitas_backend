import { Request, Response } from "express";
import Animal from "../models/animal.model";
import Refugio from "../models/refugio.model";

export const getAnimales = async (req: Request, res: Response) => {
  try {
    const animales = await Animal.findAll({ include: [Refugio] });
    res.json(animales);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener animales", error });
  }
};

export const crearAnimal = async (req: Request, res: Response) => {
  try {
    const { nombre, especie, edad, estado, foto, refugio_id } = req.body;
    const animal = await Animal.create({ nombre, especie, edad, estado, foto, refugio_id });
    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json({ message: "Error al crear animal", error });
  }
};

export const actualizarAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, especie, edad, estado, foto, refugio_id } = req.body;

    const animal = await Animal.findByPk(id);
    if (!animal) return res.status(404).json({ message: "Animal no encontrado" });

    await animal.update({ nombre, especie, edad, estado, foto, refugio_id });
    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar animal", error });
  }
};

export const eliminarAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findByPk(id);
    if (!animal) return res.status(404).json({ message: "Animal no encontrado" });

    await animal.destroy();
    res.json({ message: "Animal eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar animal", error });
  }
};