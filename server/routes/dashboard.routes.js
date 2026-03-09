import express from "express";
import { getDashboardStats } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.route("/").get(getDashboardStats);

export default router;
