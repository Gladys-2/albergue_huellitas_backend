import { Router } from "express";
import {
  obtenerDonaciones,
  crearDonacion,
  actualizarDonacion,
  eliminarDonacion
} from "../controllers/donacion.controller";

const router = Router();
router.get("/", obtenerDonaciones);
router.post("/", crearDonacion);
router.put("/:id", actualizarDonacion);
router.delete("/:id", eliminarDonacion);

export default router;
