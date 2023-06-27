import express from "express";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import { DesignationController } from "../controller/index.js"
const DesignationRouter = express.Router();

DesignationRouter.post("/", asyncWrapper(DesignationController.insertDesignation));
DesignationRouter.delete("/:id", asyncWrapper(DesignationController.deleteDesignation));
DesignationRouter.put("/:id", asyncWrapper(DesignationController.updateDesignation));

export default DesignationRouter;