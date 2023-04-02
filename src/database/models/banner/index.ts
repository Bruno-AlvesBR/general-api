import { Document, Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { IBanner } from '@domain/banner/entities';

type IModel = Document & IBanner;

const bannerSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
      default: uuid(),
      unique: true,
    },
    url: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
    category: {
      type: String,
      require: true,
      default: 'release',
    },
  },
  { timestamps: true }
);

bannerSchema.set('toJSON', {
  transform(__: any, ret: any, _: any) {
    delete ret?._id;
    delete ret?.__v;
  },
});

const Banner = model<IModel>('Banner', bannerSchema);

export { Banner };
