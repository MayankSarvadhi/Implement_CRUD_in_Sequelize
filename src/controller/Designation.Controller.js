import { db } from "../config/db.js";
import { AppError } from "../utils/AppErrorHandler.js";
const DesignationModel = db.DesignationSchema;


const insertDesignation = async (req, res, next) => {
    if (req.body.length > 1) {
        const addBulkData = await DesignationModel.bulkCreate(req.body);
        return res.status(201).json({ success: true, data: addBulkData, message: "Designation Inserted In Bulk Successfully" });
    } else {
        const addData = await DesignationModel.create(req.body);
        return res.status(201).json({ success: true, data: addData, message: "Designation Inserted Successfully" });
    }
}

const deleteDesignation = async (req, res, next) => {
    const { params: { id } } = req;
    const deleteData = await DesignationModel.destroy({ where: { id } });
    if (deleteData != 1) {
        return next(new AppError(`id = ${id} is Not Found Enter Valid id`, 404));
    } else {
        return res.status(200).json({ success: true, statusCode: 200, message: "Designation Delete Successfully" });
    }

}

const updateDesignation = async (req, res, next) => {
    const { params: { id }, body: { Name } } = req;
    const updateData = await DesignationModel.update({ Name }, { where: { id } });

    if (updateData != 1) {
        return next(new AppError(`id = ${id} is Not Found Given Valid Id`, 404));
    } else {
        return res.status(200).json({ success: true, statusCode: 200, data: updateData, message: "Designation Update Successfully" });
    }

}


const DesignationController = {
    insertDesignation,
    deleteDesignation,
    updateDesignation
}

export default DesignationController;