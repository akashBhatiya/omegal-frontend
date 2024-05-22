import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAPI } from "../../redux/reducer";
import { toast } from "react-toastify";
import { registerValidationSchema } from "../../utils/schema";
import Loader from "../../components/loading";
import Google from "../../components/loginWithGoogle";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    const data = values;
    setLoading(true);
    dispatch(RegisterAPI({ data, navigate, toast, setLoading }));
  };

  return (
    <>
      <div className="flex">
        <div className="w-full md:w-1/2 xl:w-1/3 my-auto ">
          <div className="p-5 md:p-10 w-full">
            <div className="mb-5">
              <img src="/images/logo.png" alt="" width={50} height={50} />
            </div>
            <div className="">
              <p className="text-[26px] text-[#223645] font-bold ">
                Hello Everyone , We are chat
              </p>
              <p className="text-[16px] text-[#647589] font-normal mb-5">
                Welcome to chat please register to your account.
              </p>
            </div>
            <div className="">
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  password: "",
                }}
                validationSchema={registerValidationSchema}
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
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <label className="text-[#223645] text-base font-semibold">
                          Fullname
                        </label>
                        <input
                          type="text"
                          name="fullname"
                          onBlur={handleBlur}
                          value={values.fullname}
                          onChange={handleChange}
                          placeholder="Enter your username"
                          className="py-3 px-5 border rounded-md focus:outline-none focus:shadow placeholder:text-gray-500"
                        />
                        {errors.fullname && (
                          <p className="text-sm text-red-500">
                            {errors.fullname &&
                              touched.fullname &&
                              errors.fullname}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-[#223645] text-base font-semibold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
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
                      <div className="flex justify-between gap-3 items-center">
                        <div className="w-36"></div>
                        {loading && true ? (
                          <Loader />
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="p-[14px_65px] bg-[#1c6ee9] rounded-lg text-white font-bold "
                          >
                            Signup
                          </button>
                        )}
                        <div className="underline-offset-2 underline text-sm">
                          <Link to={"/login"}>Do you have account ?</Link>
                        </div>
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
        <div className="hidden md:block md:w-1/2 xl:w-2/3 p-3 bg-[#1c6ee9]">
          <div className="flex justify-center items-center h-screen">
            <img
              src="/images/loginimage.svg"
              alt=""
              className="max-w-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
