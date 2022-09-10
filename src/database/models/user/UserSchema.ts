import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuid(),
      required: true,
      unique: true,
    },
    name: {
      firstName: { type: String, default: 'guest' },
      lastName: { type: String, default: '9128437' },
    },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    interest: [{ type: String }],
    creditCard: [
      {
        numberCard: { type: Number },
        dateCard: { type: Number },
        codeCard: { type: Number },
      },
    ],
    admin: { type: Boolean, default: false },
    cep: { type: Number },
    acessToken: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
