import { Schema, model, Document } from 'mongoose';

import { ICart } from '@domain/chart/entities';

type ICartSchema = ICart & Document;

const cartSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User',
    unique: true,
    required: true,
  },
  productsId: [{ type: String, ref: 'Product' }],
});

cartSchema.set('toJSON', {
  transform(__: any, ret: any, _: any) {
    ret._id = ret.id;
    delete ret.__v;
  },
});

const Cart = model<ICartSchema>('Cart', cartSchema);

export { Cart };
