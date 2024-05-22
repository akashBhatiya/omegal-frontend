import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetValidationSchema } from "../../utils/schema";
import { ResetPassword } from "../../redux/reducer";
import Loader from "../../components/loading";
import Google from "../../components/loginWithGoogle";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const selector = useSelector((state) => state?.user?.user?.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    setLoading(true);
    const data = values;
    dispatch(ResetPassword({ data, navigate, toast, setLoading }));
    setLoading(true);
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
                  email: selector?.email,
                  resetToken: selector?.token,
                  newPassword: "",
                  confirmPassword: "",
                }}
                validationSchema={resetValidationSchema}
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
                          New Password
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.newPassword}
                          placeholder="Password.."
                          className="py-3 px-5 border rounded-md focus:outline-none focus:shadow placeholder:text-gray-500"
                        />
                        {errors.newPassword && (
                          <p className="text-sm text-red-500">
                            {errors.newPassword &&
                              touched.newPassword &&
                              errors.newPassword}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-[#223645] text-base font-semibold">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          placeholder="Password.."
                          className="py-3 px-5 border rounded-md focus:outline-none focus:shadow placeholder:text-gray-500"
                        />
                        {errors.confirmPassword && (
                          <p className="text-sm text-red-500">
                            {errors.confirmPassword &&
                              touched.confirmPassword &&
                              errors.confirmPassword}
                          </p>
                        )}
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
                            Reset-Password
                          </button>
                        )}
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
