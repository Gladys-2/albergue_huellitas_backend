import { Router } from "express";
import { crearUsuario, crearAdministrador, obtenerUsuarios, eliminarUsuario } from "../controllers/user.controller";
import { loginUsuario } from "../controllers/auth.controller";

const router = Router();
router.post("/login", loginUsuario);
router.post("/crear-usuario", crearUsuario);
router.post("/crear-administrador", crearAdministrador);
router.get("/", obtenerUsuarios);
router.delete("/:id", eliminarUsuario);

export default router;