import type { ItemFormData } from "../types";

const validateItemForm = (formData: ItemFormData): Partial<ItemFormData> => {
  const errors: Partial<ItemFormData> = {};

  if (!formData.title.trim()) {
    errors.title = 'Title is required';
  } else if (formData.title.length < 3) {
    errors.title = 'Title must be at least 3 characters';
  }

  if (!formData.description.trim()) {
    errors.description = 'Description is required';
  } else if (formData.description.length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  return errors;
};

export { validateItemForm };