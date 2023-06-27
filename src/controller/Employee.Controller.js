import { db } from "../config/db.js";
import { AppError } from "../utils/AppErrorHandler.js";
const EmployeeModel = db.EmployeeSchema;

const InsertEmp = async (req, res, next) => {
    if (req.body.length > 1) {
        const addBulkEmp = await EmployeeModel.bulkCreate(req.body);
        return res.status(201).json({ success: true, data: addBulkEmp, message: "Employees Inserted In Bulk Successfully" });
    } else {
        const addEmp = await EmployeeModel.create(req.body);
        return res.status(201).json({ success: true, data: addEmp, message: "Employees Inserted Successfully" });
    }
}

const deleteEmp = async (req, res, next) => {
    const { params: { id } } = req;
    const deleteData = await EmployeeModel.destroy({ where: { id } });
    if (deleteData != 1) {
        return next(new AppError(`id = ${id} is Not Found Enter Valid id`, 404));
    } else {
        return res.status(200).json({ success: true, statusCode: 200, message: "Employees Delete Successfully" });
    }

}

const updateEmp = async (req, res, next) => {
    const { params: { id }, body: { FirstName, LastName, Email, Phone } } = req;
    const updateData = await EmployeeModel.update({ FirstName, LastName, Email, Phone }, { where: { id } });

    if (updateData != 1) {
        return next(new AppError(`id = ${id} is Not Found Given Valid Id`, 404));
    } else {
        return res.status(200).json({ success: true, statusCode: 200, data: updateData, message: "Employees Update Successfully" });
    }

}

const EmployeeController = {
    InsertEmp,
    deleteEmp,
    updateEmp
}

export default EmployeeController;
