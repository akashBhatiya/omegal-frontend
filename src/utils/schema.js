import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("FirstName is required"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const forgotValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
});

export const verifyValidationSchema = Yup.object().shape({
  otp: Yup.string().required("OTP is required"),
});

export const verifyForgotValidationSchema = Yup.object().shape({
  forgotPasswordOtp: Yup.string().required("OTP is required"),
});

export const resetValidationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Password is required"),
});
