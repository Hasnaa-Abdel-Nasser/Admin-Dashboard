import * as yup from "yup";

export const productSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  price: yup
    .number()
    .typeError("Price is required")
    .positive("Price must be a positive number")
    .required("Price is required")
    .min(1, "Price must be at least 1"),
  category: yup.string().required("Category is required"),
  image: yup
    .string()
    .required("Image URL is required")
    .url("Please provide a valid URL for the image"),
  description: yup
    .string()
    .required("Description is required")
    .min(3, "Description must be at least 3 characters"),
});
