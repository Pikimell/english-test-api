import { response } from '../helpers/response.js';

export const template_1 = async (event, context) => {
  const { id } = event.pathParameters;
  const {} = event.queryStringParameters;
  const {} = JSON.parse(event.body);

  const result = await templateService();
  return response(200)(result);
};
