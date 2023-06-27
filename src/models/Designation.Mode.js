export default (sequelize, DataTypes) => {
    const DesignationSchema = sequelize.define("Designation", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return DesignationSchema;
}