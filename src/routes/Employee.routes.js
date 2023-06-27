import express from "express";
import { EmployeeController } from "../controller/index.js"
import { asyncWrapper } from "../middleware/asyncWrapper.js";
const employeeRoutes = express.Router();

employeeRoutes.post("/", asyncWrapper(EmployeeController.InsertEmp));
employeeRoutes.delete("/:id", asyncWrapper(EmployeeController.deleteEmp));
employeeRoutes.put("/:id", asyncWrapper(EmployeeController.updateEmp));

export default employeeRoutes;