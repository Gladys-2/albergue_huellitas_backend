import { Router } from "express";
import { crearUsuario, crearAdministrador, obtenerUsuarios, eliminarUsuario } from "../controllers/user.controller";

const router = Router();

router.post("/usuarios/crear-usuario", crearUsuario);
router.post("/usuarios/crear-administrador", crearAdministrador);
router.get("/usuarios", obtenerUsuarios);
router.delete("/usuarios/:id", eliminarUsuario);

export default router;