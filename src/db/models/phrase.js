import { model, Mongoose, Schema } from 'mongoose';
const phraseSchema = new Schema(
  {
    english: {
      type: String,
      required: true,
    },
    russian: {
      type: String,
      required: true,
    },
    transcription: {
      type: String,
      default: '',
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  },
  {
    versionKey: false,
  },
);

phraseSchema.index({ english: 1 }, { unique: true });

export const CategoryCollection = model('category', phraseSchema);
