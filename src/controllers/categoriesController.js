import { response } from '../helpers/response.js';

export const createCategoryController = async (event, context) => {
  const data = JSON.parse(event.body);
  const result = await createCategoryService(data);
  return response(200)(result);
};