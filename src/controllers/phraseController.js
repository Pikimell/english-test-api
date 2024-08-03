import { response } from '../helpers/response.js';
import {
  createPhraseService,
  getPhraseByIdService,
  getAllPhrasesService,
  updatePhraseService,
  deletePhraseService,
} from '../services/phraseService.js';

export const createPhraseController = async (event, context) => {
  const data = JSON.parse(event.body);
  const result = await createPhraseService(data);
  return response(200)(result);
};

export const getPhraseByIdController = async (event, context) => {
  const { id } = event.pathParameters;
  const result = await getPhraseByIdService(id);
  return response(200)(result);
};

export const getAllPhrasesController = async (event, context) => {
  const { categoryId } = event.queryStringParameters || {};
  const result = await getAllPhrasesService(categoryId);
  return response(200)(result);
};

export const updatePhraseController = async (event, context) => {
  const { id } = event.pathParameters;
  const data = JSON.parse(event.body);
  const result = await updatePhraseService(id, data);
  return response(200)(result);
};

export const deletePhraseController = async (event, context) => {
  const { id } = event.pathParameters;
  const result = await deletePhraseService(id);
  return response(200)(result);
};
