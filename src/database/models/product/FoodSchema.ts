import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    category: [{ type: String }],
    price: {
      priceNumber: { type: Number, required: true },
      installment: {
        monthInstallment: { type: Number },
        pricePerMonth: { type: Number },
      },
    },
    brand: { type: String },
    rating: { type: Number },
    freight: { type: Boolean },
    stock: { type: Number, required: true },
    manufacture: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: {
      mobileSrc: { type: String },
      desktopSrc: { type: String },
    },
  },
  { timestamps: true }
);

export const Food = mongoose.model('Food', foodSchema);
