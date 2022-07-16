import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: {
      firstName: { type: String },
      lastName: { type: String },
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
    admin: { type: Boolean },
    cep: { type: Number },
    acessToken: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
