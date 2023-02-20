import mongoose, { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { IProduct } from '@domain/product/entities';

type IProductSchema = IProduct & Document;

const productSchema = new mongoose.Schema(
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
      priceNumber: { type: String, required: true },
      newPriceDiscount: { type: String },
      installment: {
        monthInstallment: { type: Number },
        pricePerMonth: { type: String },
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
    isPromotion: { type: Boolean, default: false },
    discountPercentage: { type: Number },
  },
  { timestamps: true }
);

productSchema.set('toJSON', {
  transform(_: any, ret: any, __: any) {
    delete ret.__v;
  },
});

export const Product = mongoose.model<IProductSchema>(
  'Foods',
  productSchema
);
