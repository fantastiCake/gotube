import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "text is required",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: "creator is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
