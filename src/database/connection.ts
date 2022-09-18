import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.NODE_ENV !== 'test')
  mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
    console.log('Connected to mongodb');
  });
