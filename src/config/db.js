import { Sequelize, DataTypes } from "sequelize";
import dot from "dotenv"
dot.config();
import EmployeeSchema from "../models/Employee.Model.js"
import DepartmentSchema from "../models/Department.Model.js";
import DesignationSchema from "../models/Designation.Mode.js"
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
});

// DB Connection Check Function:-
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })();

export const db = { sequelize, Sequelize }

db.EmployeeSchema = EmployeeSchema(sequelize, DataTypes);
db.DepartmentSchema = DepartmentSchema(sequelize, DataTypes);
db.DesignationSchema = DesignationSchema(sequelize, DataTypes);

// db.sequelize.sync({force : false});



