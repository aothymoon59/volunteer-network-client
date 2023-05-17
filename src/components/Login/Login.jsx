import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  return (
    <div className="mt-20">
      <div className="max-w-xl mx-auto border border-[#ABABAB] rounded bg-white py-36 px-14">
        <h2 className="text-2xl font-bold text-center mb-8">Login With</h2>
        <button onClick={handleSignIn} className="w-full ">
          <div className="flex items-center border border-[#C7C7C7] rounded-[57px] p-3 hover:bg-slate-200">
            <img
              src={"https://i.ibb.co/1ngQxz1/google.png"}
              className="inline"
              alt=""
            />{" "}
            <div className="text-center w-full">
              <span className=" font-medium">Continue with Google</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
