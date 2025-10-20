import { Router } from "express";
import { crearAdopcion, obtenerAdopciones } from "../controllers/adopcion.controller";

const router = Router();
router.get("/", obtenerAdopciones);
router.post("/", crearAdopcion);

export default router;