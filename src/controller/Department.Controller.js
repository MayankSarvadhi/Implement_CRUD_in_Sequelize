import { db } from "../config/db.js";
import { AppError } from "../utils/AppErrorHandler.js";
const DepartmentModel = db.DepartmentSchema;

const insertDepartment = async (req, res, next) => {
    if (req.body.length > 1) {
        const addBulkData = await DepartmentModel.bulkCreate(req.body);
        return res.status(201).json({ success: true, data: addBulkData, message: "Department Inserted In Bulk Successfully" });
    } else {
        const addData = await DepartmentModel.create(req.body);
        return res.status(201).json({ success: true, data: addData, message: "Department Inserted Successfully" });
    }
}

const deleteDepartment = async (req, res, next) => {
    const { params: { id } } = req;
    const deleteData = await DepartmentModel.destroy({ where: { id } });
    if (deleteData != 1) {
        return next(new AppError(`id = ${id} is Not Found Enter Valid id`, 404));
    } else {
        return res.status(200).json({ success: true, statusCode: 200, message: "Department Delete Successfully" });
    }

}

const updateDepartment = async (req, res, next) => {
    const { params: { id }, body: { Name, Type } } = req;
    const updateData = await DepartmentModel.update({ Name, Type }, { where: { id } });

    if (updateData != 1) {
        return next(new AppError(`id = ${id} is Not Found Given Valid Id`, 404));
    } else {
        return res.status(200).json({ success: true, statusCode: 200, data: updateData, message: "Department Update Successfully" });
    }

}

const departmentControllers = {
    insertDepartment,
    deleteDepartment,
    updateDepartment
}

export default departmentControllers;