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

export const authSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(1, "At least 8 characters in length")
    .max(20, "Password must be between 8 to 20 characters long"),
});
