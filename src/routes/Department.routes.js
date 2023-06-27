import express from "express"
const departmentRoutes = express.Router();
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import { departmentControllers } from "../controller/index.js";

departmentRoutes.post("/", asyncWrapper(departmentControllers.insertDepartment));
departmentRoutes.delete("/:id", asyncWrapper(departmentControllers.deleteDepartment));
departmentRoutes.put("/:id", asyncWrapper(departmentControllers.updateDepartment));


export default departmentRoutes;