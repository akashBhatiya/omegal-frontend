import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyValidationSchema } from "../../utils/schema";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { VerifyAcc } from "../../redux/reducer";
import Loader from "../../components/loading";
import Google from "../../components/loginWithGoogle";

const VerifyAccount = () => {
  const [loading, setLoading] = useState(false);
  const selector = useSelector((state) => state?.user?.user?.userData?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    const data = values;
    dispatch(VerifyAcc({ data, navigate, toast, setLoading }));
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
                Welcome to chat please verify your account.
              </p>
            </div>
            <div className="">
              <Formik
                initialValues={{ email: selector?.email, otp: "" }}
                validationSchema={verifyValidationSchema}
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
                          type="string"
                          name="otp"
                          value={values.otp}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter otp here..."
                          className="py-3 px-5 border rounded-md focus:outline-none focus:shadow placeholder:text-gray-500"
                        />
                        {errors.otp && (
                          <p className="text-sm text-red-500">
                            {errors.otp && touched.otp && errors.otp}
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
                            Verify Account
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

export default VerifyAccount;
