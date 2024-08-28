import { Router } from "express";
import { getHeroes } from "../controllers/heroes-controller.js";

const router = Router();

router.get("/", getHeroes);

export default router;
