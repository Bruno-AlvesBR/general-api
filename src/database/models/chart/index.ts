import mongoose, { Schema, model } from 'mongoose';

const chartSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true,
  },
  productId: [{ type: String }],
});

chartSchema.set('toJSON', {
  transform(__: any, ret: any, _: any) {
    const userIdObject = new mongoose.Types.ObjectId(
      ret?.userId
    ).toString();

    ret._id = userIdObject;
    delete ret.__v;
  },
});

const Chart = model('Chart', chartSchema);

export default Chart;
