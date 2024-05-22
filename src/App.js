import "./App.css";
import Landing from "./page/landingPage";
import Login from "./page/login/login";
import Signup from "./page/signup/signup";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./page/welcome/welcome";
import ResetPassword from "./page/resetpassword/resetpassword";
import Profile from "./page/profile";
import NotFound from "./page/notFound";
import { profile, notfound } from "./data";
import { useSelector } from "react-redux";
import Forgot from "./page/forgotPassword";
import VerifyAccount from "./page/verifyAccount";
import VerifyForgotPassword from "./page/verifyForgotPassword";
// import AudioAndVideo from "./page/videocall";
import TempVideoPage from "./page/video";
import Chat from "./page/Chat/Chat";

function App() {
  const selector = useSelector((state) => state?.user?.user?.userData?.user);
  const selectorData = useSelector((state) => state?.user?.user?.userData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route
          path="/verifyforgotpassword"
          element={<VerifyForgotPassword />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={
            selector || selectorData?.length === undefined || 0 ? (
              <Profile selector={selector || selectorData} />
            ) : (
              <NotFound data={profile} />
            )
          }
        />
        <Route path="/video" element={<TempVideoPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound data={notfound} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
