import * as mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [{ userId: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", CommentSchema);
