import { Request, Response } from "express";
import Animal from "../models/animal.model";

{/* GET - todos los animales */}
export const obtenerAnimales = async (req: Request, res: Response) => {
  try {
    const animales = await Animal.findAll();
    res.json(animales);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener animales", error });
  }
};

{/* POST - crear animal*/}
export const crearAnimal = async (req: Request, res: Response) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json({ message: "Error al crear animal", error });
  }
};

{/*PUT - actualizar*/}
export const actualizarAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Animal.update(req.body, { where: { id } });
    res.json({ message: "Animal actualizado" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar animal", error });
  }
};

{/*DELETE - eliminar*/}
export const eliminarAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Animal.destroy({ where: { id } });
    res.json({ message: "Animal eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar animal", error });
  }
};