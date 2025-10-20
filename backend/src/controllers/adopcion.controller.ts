import { Request, Response } from "express";
import Adopcion from "../models/adopcion.model";
import Usuario from "../models/user.model";
import Animal from "../models/animal.model";

export const getAdopciones = async (req: Request, res: Response) => {
  try {
    const adopciones = await Adopcion.findAll({ include: [Usuario, Animal] });
    res.json(adopciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener adopciones", error });
  }
};

export const crearAdopcion = async (req: Request, res: Response) => {
  try {
    const { usuario_id, animal_id, estado } = req.body;

    const usuario = await Usuario.findByPk(usuario_id);
    const animal = await Animal.findByPk(animal_id);
    if (!usuario || !animal) return res.status(404).json({ message: "Usuario o Animal no encontrado" });

    const adopcion = await Adopcion.create({ usuario_id, animal_id, estado });
    res.status(201).json(adopcion);
  } catch (error) {
    res.status(500).json({ message: "Error al crear adopción", error });
  }
};

export const actualizarAdopcion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const adopcion = await Adopcion.findByPk(id);
    if (!adopcion) return res.status(404).json({ message: "Adopción no encontrada" });

    await adopcion.update({ estado });
    res.json(adopcion);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar adopción", error });
  }
};

export const eliminarAdopcion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const adopcion = await Adopcion.findByPk(id);
    if (!adopcion) return res.status(404).json({ message: "Adopción no encontrada" });

    await adopcion.destroy();
    res.json({ message: "Adopción eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar adopción", error });
  }
};