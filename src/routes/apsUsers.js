import { Router } from "express";
const router = Router();
import {
  getApsUsersLogin,
  consultaMpUsuario,
  consultaMpComercio,
  altaTarjetaUsuario,
  altaCliente,
  altaCompra
} from "../controllers/apsUsers.controller";

// /api/users
router.post("/login", getApsUsersLogin);
router.get("/consultaMpUsuario", consultaMpUsuario);
router.get("/consultaMpComercio", consultaMpComercio);
router.post("/altaTarjetaUsuario", altaTarjetaUsuario);
router.post("/signup", altaCliente);
router.post("/compra", altaCompra);

export default router;
