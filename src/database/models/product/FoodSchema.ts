import mongoose, { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { IFoodProps } from '@domain/product/entities/IFoodEntity';

type IProduct = IFoodProps & Document;

const foodSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: uuid(),
    },
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

foodSchema.set('toJSON', {
  transform(_: any, ret: any, __: any) {
    delete ret.__v;
  },
});

export const Food = mongoose.model<IProduct>('Food', foodSchema);
