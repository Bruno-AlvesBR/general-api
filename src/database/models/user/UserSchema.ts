import mongoose, { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { IUserProps } from '@domain/user/entities/IUserEntity';

type IUser = IUserProps & Document;

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

userSchema.set('toJSON', {
  transform(_: any, ret: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

export const User = mongoose.model<IUser>('User', userSchema);
