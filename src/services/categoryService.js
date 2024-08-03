import { CategoryCollection } from '../db/models/category.js';

// Створення нової категорії
export const createCategoryService = async (data) => {
  try {
    const category = new CategoryCollection(data);
    await category.save();
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Отримання категорії за id
export const getCategoryByIdService = async (id) => {
  try {
    const category = await CategoryCollection.findById(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Отримання усіх категорій
export const getAllCategoriesService = async () => {
  try {
    const categories = await CategoryCollection.find();
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Оновлення категорії за id
export const updateCategoryService = async (id, data) => {
  try {
    const category = await CategoryCollection.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Видалення категорії за id
export const deleteCategoryService = async (id) => {
  try {
    const category = await CategoryCollection.findByIdAndDelete(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};
