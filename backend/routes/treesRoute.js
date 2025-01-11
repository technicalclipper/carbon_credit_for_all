import express from "express";
import { calculatePlantAge } from "../controller/sequestration.js";
import { uploadtree } from "../controller/uploadController.js";
const router =express.Router();

//router.get("/treeage",calculatePlantAge);

router.post("/uploadtree",uploadtree);

export default router;