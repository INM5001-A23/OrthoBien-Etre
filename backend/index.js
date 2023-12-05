import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import multer from "multer";

// import routes
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";
import usersRoutes from "./routes/users.js";
import connexionRoutes from "./routes/connexion.js";
import ajoutproduitRoutes from "./routes/ajoutproduit.js";
import modifierproduitRoutes from "./routes/modifierproduit.js";
import supprimerproduitRoutes from "./routes/deleteproduit.js";
import ajouterimagesRoutes from "./routes/ajoutimages.js";
// app
const app = express();
const port = 3300;
const upload = multer();

// enable cors
app.use(cors());
app.use(bodyParser.json());

app.use(upload.array("files", 12));

// db connection
// mongoose.connect('mongodb://localhost:27017/orthobienetre',{useNewUrlParser: true});
mongoose.connect(
  "mongodb+srv://admin:pVYa4Qc0WZzMFQ9U@cluster0.6hiecyv.mongodb.net/INM5001",
  { useNewUrlParser: true }
);
mongoose.connection.on("connected", () => console.log("Mongodb Connected..."));
mongoose.connection.on("disconnected", () =>
  console.log("Mongodb Disconnected...")
);
mongoose.connection.on("error", (err) => console.error(err));

// app
app.get("/", (req, res) => {
  res.send("<h2>API is running...</h2>");
});

// Use API Routes
app.use("/categories", categoryRoutes);
app.use("/produits", productRoutes);
app.use("/panier", cartRoutes);
app.use("/commande", orderRoutes);
app.use("/utilisateur", usersRoutes);
app.use("/connexion", connexionRoutes);
app.use("/nouveauProduit", ajoutproduitRoutes);
app.use("/modificationProduit", modifierproduitRoutes);
app.use("/supprimerProduit", supprimerproduitRoutes);
app.use("/ajouterImages", ajouterimagesRoutes);

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});
