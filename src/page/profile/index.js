import React from "react";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

function ProfilePage({ selector }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <main className="profile-page">
      <section className="relative block h-[660px]">
        <div
          className="absolute top-0 w-full h-full bg-bottom bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url(../images/Landingbg.png)",
          }}
        >
          <div className="max-w-[500px] mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg  mt-28">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/images/profile.jpeg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 ">
                    <div className="py-6 px-3 mt-28 flex justify-center">
                      <button
                        className="bg-[#278BFF] active:bg-[#278BFF] uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleClick()}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {selector.fullname}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {selector.email}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {/* Solution Manager - Creative Tim Officer */}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {/* University of Computer Science */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default ProfilePage;
