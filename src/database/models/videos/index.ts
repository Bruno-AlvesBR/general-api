import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
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

export const Video = mongoose.model('Video', videoSchema);
