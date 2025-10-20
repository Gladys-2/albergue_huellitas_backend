import { Request, Response } from "express";
import Donacion from "../models/donacion.model";
import Usuario from "../models/user.model";

export const getDonaciones = async (req: Request, res: Response) => {
  try {
    const donaciones = await Donacion.findAll({ include: [Usuario] });
    res.json(donaciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener donaciones", error });
  }
};

export const crearDonacion = async (req: Request, res: Response) => {
  try {
    const { usuario_id, monto, tipo } = req.body;
    const usuario = await Usuario.findByPk(usuario_id);
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    const donacion = await Donacion.create({ usuario_id, monto, tipo });
    res.status(201).json(donacion);
  } catch (error) {
    res.status(500).json({ message: "Error al crear donación", error });
  }
};

export const actualizarDonacion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { monto, tipo } = req.body;

    const donacion = await Donacion.findByPk(id);
    if (!donacion) return res.status(404).json({ message: "Donación no encontrada" });

    await donacion.update({ monto, tipo });
    res.json(donacion);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar donación", error });
  }
};

export const eliminarDonacion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const donacion = await Donacion.findByPk(id);
    if (!donacion) return res.status(404).json({ message: "Donación no encontrada" });

    await donacion.destroy();
    res.json({ message: "Donación eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar donación", error });
  }
};