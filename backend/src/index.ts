import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import { sequelize } from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para JSON
app.use(express.json());

// Configuración de CORS para permitir conexión desde el frontend
app.use(cors({
  origin: "http://localhost:5173", // URL de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Rutas
app.use("/api/usuarios", authRoutes);

// Test de conexión a la base de datos
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa");
  } catch (error) {
    console.error("Error al conectar a PostgreSQL:", error);
  }
};

testConnection();

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});