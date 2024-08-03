import { model, Schema } from 'mongoose';
const phraseSchema = new Schema(
  {
    eng: {
      type: String,
      required: true,
    },
    rus: {
      type: String,
      required: true,
    },
    transcription: {
      type: String,
      default: '',
    },
    categoryId: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

phraseSchema.index({ english: 1 }, { unique: true });

export const PhraseCollection = model('phrase', phraseSchema, 'phrase');
