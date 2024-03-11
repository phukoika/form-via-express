import * as yup from "yup";

export const UserSchemaLogin = yup
  .object({
    userName: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(9, "Password must be at least 9 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*]/,
        "Password must contain at least one special character (!@#$%^&*)"
      )
      .required("Password is required"),
  })
  .required();
