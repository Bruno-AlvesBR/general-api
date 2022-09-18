import { Document, Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { IVideoProps } from '@domain/videos/entities';

type IVideo = IVideoProps & Document;

const videoSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: uuid(),
    },
    title: {
      type: String,
      default: 'Unknow',
    },
    description: {
      type: String,
      default: 'No description yet',
    },
    file: {
      url: {
        type: String,
        required: true,
        unique: true,
      },
      type: {
        type: String,
      },
      image: {
        type: String,
        required: true,
      },
    },
    rating: {
      type: Number,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

videoSchema.set('toJSON', {
  transform(_: any, ret: any, __: any) {
    delete ret.__v;
  },
});

export const Video = model<IVideo>('Video', videoSchema);
