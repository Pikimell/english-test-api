import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createCategoryController,
  getCategoryByIdController,
  getAllCategoriesController,
  updateCategoryController,
  deleteCategoryController,
} from '../controllers/categoryController.js';

export const createCategoryHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createCategoryController);
  return await ctrl(event, context);
};

export const getCategoryByIdHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getCategoryByIdController);
  return await ctrl(event, context);
};

export const getAllCategoriesHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getAllCategoriesController);
  return await ctrl(event, context);
};

export const updateCategoryHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updateCategoryController);
  return await ctrl(event, context);
};

export const deleteCategoryHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deleteCategoryController);
  return await ctrl(event, context);
};
