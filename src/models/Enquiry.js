// src/models/Enquiry.js
import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    productId: {
      type: String,
      trim: true,
    },
    productName: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    source: {
      type: String, // "popup", "products-page", etc.
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// ✅ VERY IMPORTANT: default export must be a model
export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);


  