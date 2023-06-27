export default (sequelize, DataTypes) => {
    const DepartmentSchema = sequelize.define("Department", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Type: {
            type: DataTypes.ENUM,
            values: ['Tech', 'Non-Tech'],
            allowNull: false
        }

    });
    return DepartmentSchema;
}