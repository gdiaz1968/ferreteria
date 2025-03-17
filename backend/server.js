require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Inicializar la app de Express
const app = express();

// Middleware
app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Habilita CORS

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

// Rutas
const productoRoutes = require("./routes/ProductoRoutes");
app.use("/api/productos", productoRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Ferretería funcionando 🚀");
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
