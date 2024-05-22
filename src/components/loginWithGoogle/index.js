import React from "react";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "@leecheuk/react-google-login";
import { loginWithGoogle } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Google = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const data = {
      fullname: response?.profileObj?.name,
      email: response?.profileObj?.email,
      password: response?.googleId,
      image: response?.profileObj?.imageUrl,
    };
    dispatch(loginWithGoogle({ data, navigate, toast }));
  };
  return (
    <div className="py-5 flex justify-center flex-col items-center gap-3">
      <p className="text-base text-[#223645]">OR Connect with</p>
      <div className=" flex gap-3">
        <GoogleLogin
          clientId="1072416019688-7pc4f0ml5lbq04dn8stagrv9tbto92en.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="bg-gray-300 p-3 rounded-full"
            >
              <FcGoogle className=" text-[30px]" />
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          prompt="select_account"
        />
      </div>
    </div>
  );
};

export default Google;
