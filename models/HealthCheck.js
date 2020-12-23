module.exports = (sequelize, DataTypes) => {
  const HealthCheck = sequelize.define(
    "HealthCheck",
    {
      weight: {
        type: DataTypes.TEXT,
      },
      height: {
        type: DataTypes.TEXT,
      },
      blood_pressure: {
        type: DataTypes.TEXT,
      },
      //รอบเอว
      waist: {
        type: DataTypes.TEXT,
      },
      FBS: {
        type: DataTypes.TEXT,
      },
      Uric_acid: {
        type: DataTypes.TEXT,
      },
      Creatinine: {
        type: DataTypes.TEXT,
      },
      BUN: {
        type: DataTypes.TEXT,
      },
      Alk_Phos: {
        type: DataTypes.TEXT,
      },
      AST_SGOT: {
        type: DataTypes.TEXT,
      },
      ALT_SGPT: {
        type: DataTypes.TEXT,
      },
      LDL: {
        type: DataTypes.TEXT,
      },
      HDL: {
        type: DataTypes.TEXT,
      },
      Tg: {
        type: DataTypes.TEXT,
      },
      Chol: {
        type: DataTypes.TEXT,
      },
      Hb: {
        type: DataTypes.TEXT,
      },
      Hct: {
        type: DataTypes.TEXT,
      },
      WBC: {
        type: DataTypes.TEXT,
      },
      Neu: {
        type: DataTypes.TEXT,
      },
      Lym: {
        type: DataTypes.TEXT,
      },
      Eo: {
        type: DataTypes.TEXT,
      },
      Mono: {
        type: DataTypes.TEXT,
      },
      Baso: {
        type: DataTypes.TEXT,
      },
      RBC_Morphology: {
        type: DataTypes.TEXT,
      },
      Plt_Smear: {
        type: DataTypes.TEXT,
      },
      Platelets: {
        type: DataTypes.TEXT,
      },
      x_ray: {
        type: DataTypes.TEXT,
      },
      image_x_ray: {
        type: DataTypes.TEXT,
      },
      //eye
      //การทำงานของกล้ามเนื้อไกล
      muscles: {
        type: DataTypes.TEXT,
      },
      //สมดุลตาแนวนอนใกล้
      near_lateral: {
        type: DataTypes.TEXT,
      },
      //ตรวจลานใกล้
      visual_field: {
        type: DataTypes.TEXT,
      },
      // การมองเห็นภาพระยะใกล้ขวา
      near_vision_right: {
        type: DataTypes.TEXT,
      },
      // การมองเห็นภาพระยะใกล้ซ้าย
      near_vision_left: {
        type: DataTypes.TEXT,
      },
      //สมดุลตาแนวนอนไกล
      far_lateral: {
        type: DataTypes.TEXT,
      },
      //สมดุลตาแนวดิ่งไกล
      far_vertical: {
        type: DataTypes.TEXT,
      },
      //การมองเห็นภาพระยะใกล้
      near_vision: {
        type: DataTypes.TEXT,
      },

      //การมองเห็นภาพชัดลึกไกล
      far_depth_perception: {
        type: DataTypes.TEXT,
      },

      //มุมมองเห็นสี
      color_vision: {
        type: DataTypes.TEXT,
      },
      //การมองเห็นภาพระยะไกลขวา
      far_vision_right: {
        type: DataTypes.TEXT,
      },
      //การมองเห็นภาพระยะไกลซ้าย
      far_vision_left: {
        type: DataTypes.TEXT,
      },
      //การมองเห็นภาพระยะไกล
      far_vision: {
        type: DataTypes.TEXT,
      },
      result_rihgt: {
        type: DataTypes.TEXT,
      },
      result_left: {
        type: DataTypes.TEXT,
      },
      // หู
      left_500_Hz: {
        type: DataTypes.TEXT,
      },
      left_1000_Hz: {
        type: DataTypes.TEXT,
      },
      left_2000_Hz: {
        type: DataTypes.TEXT,
      },
      left_3000_Hz: {
        type: DataTypes.TEXT,
      },
      left_4000_Hz: {
        type: DataTypes.TEXT,
      },
      left_6000_Hz: {
        type: DataTypes.TEXT,
      },
      left_8000_Hz: {
        type: DataTypes.TEXT,
      },
      right_500_Hz: {
        type: DataTypes.TEXT,
      },
      right_1000_Hz: {
        type: DataTypes.TEXT,
      },
      right_2000_Hz: {
        type: DataTypes.TEXT,
      },
      right_3000_Hz: {
        type: DataTypes.TEXT,
      },
      right_4000_Hz: {
        type: DataTypes.TEXT,
      },
      right_6000_Hz: {
        type: DataTypes.TEXT,
      },
      right_8000_Hz: {
        type: DataTypes.TEXT,
      },
      left_result: {
        type: DataTypes.TEXT,
      },
      right_result: {
        type: DataTypes.TEXT,
      },

      // ปอด
      FVC_MEAS: {
        type: DataTypes.TEXT,
      },
      FVC_PRED: {
        type: DataTypes.TEXT,
      },
      FVC_PERCENT_PRED: {
        type: DataTypes.TEXT,
      },
      FVC1_MEAS: {
        type: DataTypes.TEXT,
      },
      FVC1_PRED: {
        type: DataTypes.TEXT,
      },
      FVC1_PERCENT_PRED: {
        type: DataTypes.TEXT,
      },
      FVC_and_FVC1_MEAS: {
        type: DataTypes.TEXT,
      },
      lungs_result: {
        type: DataTypes.TEXT,
      },
      lungs_xray: {
        type: DataTypes.TEXT,
      },
      diagnose: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "HealthCheck",
      timestamps: false,
    }
  );
  HealthCheck.associate = (models) => {
    HealthCheck.belongsTo(models.Patient, { foreignKey: "patient_id" });
  };
  return HealthCheck;
};
