import { response } from '../helpers/response.js';
import {
  createCategoryService,
  getCategoryByIdService,
  getAllCategoriesService,
  updateCategoryService,
  deleteCategoryService,
} from '../services/categoryService.js';

export const createCategoryController = async (event, context) => {
  const data = JSON.parse(event.body);
  const result = await createCategoryService(data);
  return response(200)(result);
};

export const getCategoryByIdController = async (event, context) => {
  const { id } = event.pathParameters;
  const result = await getCategoryByIdService(id);
  return response(200)(result);
};

export const getAllCategoriesController = async (event, context) => {
  const result = await getAllCategoriesService();
  return response(200)(result);
};

export const updateCategoryController = async (event, context) => {
  const { id } = event.pathParameters;
  const data = JSON.parse(event.body);
  const result = await updateCategoryService(id, data);
  return response(200)(result);
};

export const deleteCategoryController = async (event, context) => {
  const { id } = event.pathParameters;
  const result = await deleteCategoryService(id);
  return response(200)(result);
};
