import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: {
      firstName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: false,
      },
    },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    interest: [{ type: String, required: false }],
    creditCard: [
      {
        numberCard: {
          type: Number,
          required: false,
        },
        dateCard: {
          type: Number,
          required: false,
        },
        codeCard: {
          type: Number,
          required: false,
        },
      },
    ],
    admin: { type: Boolean, required: false },
    cep: { type: Number, required: false },
    acessToken: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
