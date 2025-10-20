import { Router } from "express";
import {
  obtenerAnimales,
  crearAnimal,
  actualizarAnimal,
  eliminarAnimal
} from "../controllers/animal.controller";

const router = Router();
router.get("/", obtenerAnimales);
router.post("/", crearAnimal);
router.put("/:id", actualizarAnimal);
router.delete("/:id", eliminarAnimal);

export default router;