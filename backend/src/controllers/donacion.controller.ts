import { Request, Response } from "express";
import Donacion from "../models/donacion.model";

{/*GET todas las donaciones*/}
export const obtenerDonaciones = async (req: Request, res: Response) => {
  try {
    const donaciones = await Donacion.findAll();
    res.json(donaciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener donaciones", error });
  }
};

{/*POST crear donación*/}
export const crearDonacion = async (req: Request, res: Response) => {
  try {
    const donacion = await Donacion.create(req.body);
    res.status(201).json(donacion);
  } catch (error) {
    res.status(500).json({ message: "Error al crear donación", error });
  }
};

{/*PUT actualizar*/}
export const actualizarDonacion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Donacion.update(req.body, { where: { id } });
    res.json({ message: "Donación actualizada" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar donación", error });
  }
};

{/*DELETE eliminar*/}
export const eliminarDonacion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Donacion.destroy({ where: { id } });
    res.json({ message: "Donación eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar donación", error });
  }
};