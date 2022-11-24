import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
});

export default mongoose.model("User", UserSchema);
