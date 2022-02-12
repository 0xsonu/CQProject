import * as mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    media: {
      type: [{ url: String, caption: String }],
      default: [],
    },
    comments: {
      type: [{ commentId: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    },
    upvote: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
