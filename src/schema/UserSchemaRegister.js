import * as yup from "yup";
export const UserSchemaRegister = yup.object({
  shopName: yup.string().required("Username is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
      "Invalid Vietnam phone number"
    ),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  address: yup.string().required("Address is required"),
  province: yup.string().required("Province is required"),
  district: yup.string().required("District is required"),
  ward: yup.string().required("Wards is required"),
  acceptTerm: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});
