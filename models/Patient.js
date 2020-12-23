module.exports = (sequelize,DataTypes) => {
    const Patient = sequelize.define("Patient", {
        id_employee:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        id_card:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false      
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false      
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        company:{
            type: DataTypes.STRING,
            allowNull: false,   
        },
        department:{
            type: DataTypes.STRING,
            allowNull: false,   
        },
        position:{
            type: DataTypes.STRING,
            allowNull: false,  
        },
        nationality:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        race:{
            type: DataTypes.STRING,
            allowNull: false,    
        },
        brithday:{
            type: DataTypes.STRING,
            allowNull: false,    
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false   
        },
        blood_type:{
            type: DataTypes.STRING,
            allowNull: false    
        },
        phone_number:{
            type: DataTypes.STRING,
            allowNull: false    
        },  
        emergency_contact:{
            type: DataTypes.STRING,
            allowNull: false    
        },
    },{
        tableName: "Patient",
        timestamps: false
    });
    Patient.associate = models => {
        Patient.hasMany(models.HealthCheck, { foreignKey: "patient_id" })
    };
    return Patient;

    
}