const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
  },
  {
    versionKey: false,
  },
);

const StudentModel = mongoose.model("Student", StudentSchema);

module.export = { StudentModel };
