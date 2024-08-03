import { model, Schema } from 'mongoose';
const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

categorySchema.index({ title: 1 }, { unique: true });

export const TemplatesCollection = model('category', categorySchema);