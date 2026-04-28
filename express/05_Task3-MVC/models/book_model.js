import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },
    author: {
      type: String,
      required: [true, "Please provide a author's name"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Please provide a publication year"],
      min: [1000, "publication year cannot be less than 1000"],
      max: [
        new Date().getFullYear(),
        "Publication date cannot excced current year",
      ], //we are using the current date and year in the first function!!!
    },
  },
  { timestamps: true },
);

export default mongoose.model("book", bookSchema);
