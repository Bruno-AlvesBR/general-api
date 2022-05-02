import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    category: [{ type: String, required: false }],
    price: {
      number: { type: Number, required: true },
      installment: {
        month: { type: Number, required: false },
        pricePerMonth: { type: Number, required: false },
      },
    },
    brand: { type: String, required: false },
    rating: { type: Number, required: false },
    freight: { type: Boolean, required: false },
    stock: { type: Number, required: true },
    manufacture: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: {
      mobileSrc: { type: String, required: false },
      desktopSrc: { type: String, required: false },
    },
  },
  { timestamps: true }
);

export const Food = mongoose.model('Food', foodSchema);
