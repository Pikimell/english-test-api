import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { createCategoryController } from '../../controllers/categoryController.js';

export const createCategoryHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createCategoryController);
  return await ctrl(event, context);
};
