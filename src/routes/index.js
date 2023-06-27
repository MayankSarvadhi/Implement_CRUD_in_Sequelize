import express from "express"
import { AppError } from "../utils/AppErrorHandler.js";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import employeeRoutes from "./Employee.routes.js";
import departmentRoutes from "./Department.routes.js";
import DesignationRouter from "./Designation.routes.js";
export const router = express.Router();


router.use("/Employee", employeeRoutes);
router.use("/Department", departmentRoutes);
router.use("/Designation", DesignationRouter);


// handle bad Request For Routings
const invalidedRouter = asyncWrapper((req, res, next) => {
    return next(new AppError(`${req.url} - Bad Request`, 400));
});
router.all("*", invalidedRouter);