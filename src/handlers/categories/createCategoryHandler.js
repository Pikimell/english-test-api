import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { createCategoryController } from '../../controllers/categoriesController.js';

export const createCategoryHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createCategoryController);
  return await ctrl(event, context);
};
