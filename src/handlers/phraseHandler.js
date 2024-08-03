import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createPhraseController,
  getPhraseByIdController,
  getAllPhrasesController,
  updatePhraseController,
  deletePhraseController,
} from '../controllers/phraseController.js';

export const createPhraseHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createPhraseController);
  return await ctrl(event, context);
};

export const getPhraseByIdHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getPhraseByIdController);
  return await ctrl(event, context);
};

export const getAllPhrasesHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getAllPhrasesController);
  return await ctrl(event, context);
};

export const updatePhraseHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updatePhraseController);
  return await ctrl(event, context);
};

export const deletePhraseHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deletePhraseController);
  return await ctrl(event, context);
};
