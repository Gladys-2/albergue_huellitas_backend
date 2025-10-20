import { Router } from "express";
import { loginUsuario } from "../controllers/auth.controller";

const router = Router();

// POST /api/auth/login
router.post("/login", loginUsuario);

export default router;