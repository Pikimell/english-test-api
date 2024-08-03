import mongoose from 'mongoose';
import { PhraseCollection } from '../db/models/phrase.js';

// Створення нової фрази
export const createPhraseService = async (data) => {
  try {
    const phrase = new PhraseCollection(data);
    await phrase.save();
    return phrase;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Отримання фрази за id
export const getPhraseByIdService = async (id) => {
  try {
    const phrase = await PhraseCollection.findById(id);
    if (!phrase) {
      throw new Error('Phrase not found');
    }
    return phrase;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllPhrasesService = async (categoryId) => {
  try {
    if (categoryId) {
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        throw new Error('Invalid categoryId');
      }
      const phrases = await PhraseCollection.find({ categoryId });
      return phrases;
    } else {
      const phrases = await PhraseCollection.find();
      return phrases;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// Оновлення фрази за id
export const updatePhraseService = async (id, data) => {
  try {
    const phrase = await PhraseCollection.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!phrase) {
      throw new Error('Phrase not found');
    }
    return phrase;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Видалення фрази за id
export const deletePhraseService = async (id) => {
  try {
    const phrase = await PhraseCollection.findByIdAndDelete(id);
    if (!phrase) {
      throw new Error('Phrase not found');
    }
    return phrase;
  } catch (error) {
    throw new Error(error.message);
  }
};
