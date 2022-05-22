import mongoose from 'mongoose';

const PodcastSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    members: [{ type: String, required: false }],
    thumbnail: { type: String, required: false },
    description: {
      type: String,
      required: false,
    },
    file: {
      url: { type: String, required: true },
      type: { type: String, required: false },
      duration: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

export const Podcast = mongoose.model(
  'Podcast',
  PodcastSchema
);
