const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: false },
    isAdmin: { type: Boolean, default: false },
    isAgent: { type: Boolean, default: false },
    skills: { type: Array, default: false },
    profile: {
      type: String,
      required: true,
      default: "https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
