import mongoose from 'mongoose';

const PodcastSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
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

export const Podcast = mongoose.model('Podcast', PodcastSchema);
