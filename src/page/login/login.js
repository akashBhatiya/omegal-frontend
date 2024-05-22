import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginValidationSchema } from "../../utils/schema";
import { useDispatch } from "react-redux";
import { LoginAPI } from "../../redux/reducer";
import { toast } from "react-toastify";
import Loader from "../../components/loading";
import Google from "../../components/loginWithGoogle";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    setLoading(true);
    const data = values;
    dispatch(LoginAPI({ data, navigate, toast, setLoading }));
    setLoading(true);
  };

  return (
    <>
      <div className="flex">
        <div className="w-full md:w-1/2 xl:w-1/3 my-auto">
          <div className="p-5 md:p-10 w-full">
            <div className="mb-5">
              <img src="/images/logo.png" alt="" width={50} height={50} />
            </div>
            <div className="">
              <p className="text-[26px] text-[#223645] font-bold ">
                Hello Everyone , We are chat
              </p>
              <p className="text-[16px] text-[#647589] font-normal mb-5">
                Welcome to chat please login to your account.
              </p>
            </div>
            <div className="">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginValidationSchema}
                onSubmit={submitHandler}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 sm:gap-6">
                      <div className="flex flex-col gap-3">
                        <label className="text-[#223645] text-base font-semibold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter email address..."
                          className="py-3 px-5 border rounded-md focus:outline-none focus:shadow placeholder:text-gray-500"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">
                            {errors.email && touched.email && errors.email}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-[#223645] text-base font-semibold">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Password.."
                          className="py-3 px-5 border rounded-md focus:outline-none focus:shadow placeholder:text-gray-500"
                        />
                        {errors.password && (
                          <p className="text-sm text-red-500">
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </p>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <input type="checkbox" />{" "}
                          <p className="text-sm text-[#223645]">Remember Me.</p>
                        </div>
                        <Link
                          to="/forgotpassword"
                          className="text-sm text-[#647589]"
                        >
                          Forget password?
                        </Link>
                      </div>
                      <div className="flex justify-center gap-3 flex-col sm:flex-row">
                        {loading && true ? (
                          <Loader />
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="p-[14px_65px] bg-[#1c6ee9] rounded-lg text-white font-bold"
                          >
                            Login
                          </button>
                        )}
                        <Link
                          className="p-[14px_65px] bg-[#1c6ee9] rounded-lg text-white font-bold text-center"
                          to={"/signup"}
                        >
                          Signup
                        </Link>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            <Google />
            <div className="flex justify-center">
              <p className="text-[#647589]">
                Terms and condition & Privacy policy
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 xl:w-2/3 p-3 bg-[#1c6ee9] ">
          <div className="flex justify-center items-center h-screen">
            <img
              src="/images/loginimage.svg"
              className="max-w-[500px] w-full"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
