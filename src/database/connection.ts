import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.NODE_ENV !== 'test')
  mongoose
    .connect(
      `mongodb+srv://brunoalves:brunoph1224@cluster0.6kdgw.mongodb.net`
    )
    .then(() => {
      console.log('Connected to mongodb');
    });
