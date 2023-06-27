
export default (sequelize, DataTypes) => {
    const EmployeeSchema = sequelize.define("Employee", {
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                min: 11,
            }
        },
        Phone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                len: [10]
            }
        }

    });
    return EmployeeSchema;
}