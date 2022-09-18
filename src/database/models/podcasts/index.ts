import { model, Schema, Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { IPodcastProps } from '@domain/podcast/entities';

type IPodcast = IPodcastProps & Document;

const podcastSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: uuid(),
    },
    title: { type: String, required: true },
    members: [{ type: String }],
    thumbnail: { type: String },
    description: { type: String },
    file: {
      url: { type: String, required: true },
      type: { type: String },
      duration: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

podcastSchema.set('toJSON', {
  transform(_: any, ret: any, __: any) {
    delete ret.__v;
  },
});

export const Podcast = model<IPodcast>('Podcast', podcastSchema);
