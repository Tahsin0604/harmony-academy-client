import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleLogin = ({ from }) => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        const { displayName, email, photoURL } = user;
        const newUser = {
          image: photoURL,
          name: displayName,
          email,
          role: "student",
          gender: "",
        };
        axios.post("http://localhost:5000/users", newUser).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch();
  };
  return (
    <div className="max-w-md mx-auto rounded-lg py-8 px-6 shadow-md bg-slate-50 dark:bg-slate-800 ">
      <div>
        <button
          onClick={handleGoogle}
          type="submit"
          className="bg-slate-800 w-full dark:bg-white text-white dark:text-black font-yanoneKaffeesatz text-xl py-1 rounded-lg transition-transform hover:scale-105 ease-in-out flex justify-center items-center gap-2"
        >
          <FaGoogle className="text-lg"></FaGoogle>{" "}
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
