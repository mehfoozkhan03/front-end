const mongoose = require("mongoose");

const InstructorSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
  },
  {
    versionKey: false,
  },
);

const InstructorModel = mongoose.model("Instructor", InstructorSchema);

module.export = { InstructorModel };
