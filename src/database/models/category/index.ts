import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { ICategory } from '@domain/categories/entities';

type IModel = Document & ICategory;

const schema = new Schema(
  {
    id: {
      type: String,
      default: uuid(),
      unique: true,
    },
    name: { type: String, require: true },
    slug: { type: String, require: true },
    description: { type: String },
  },
  { timestamps: true }
);

schema.set('toJSON', {
  transform(__: any, ret: any, _: any) {
    delete ret?._id;
    delete ret?.__v;
  },
});

const CategoryModel = model<IModel>('categories', schema);

export { CategoryModel };
