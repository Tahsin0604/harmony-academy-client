import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || location?.state?.from || "/";
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        toast.success("You are logged In");
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="250"
      className="mt-28 mb-12 min-h-[calc(100vh-380px)]"
    >
      <Helmet>
        <title>Harmony Academy | Login</title>
      </Helmet>
      <div className="text-center">
        <SectionTitle
          title="Login Now"
          color={true}
          position="right"
        ></SectionTitle>
      </div>
      <Container>
        <div className="max-w-md mx-auto rounded-lg py-8 px-6 shadow-md bg-slate-50 dark:bg-slate-800 mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                <span className="font-yanoneKaffeesatz text-lg">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="py-1 px-2 border outline-none border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="password" className="mb-1">
                <span className="font-yanoneKaffeesatz text-lg">Password</span>
              </label>
              <div className="relative">
                <input
                  type={passwordEye === false ? "password" : "text"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^[a-z0-9]+$/,
                  })}
                  className="py-1 pl-2 pr-8 border w-full outline-none border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
                <div className="absolute top-[6px] right-1 text-black text-2xl">
                  {passwordEye === false ? (
                    <AiFillEyeInvisible
                      onClick={handlePasswordClick}
                    ></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye onClick={handlePasswordClick}></AiFillEye>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 flex">
              <p className="text-lg font-yanoneKaffeesatz">
                <small>
                  Don't have an account.{" "}
                  <Link
                    to="/register"
                    state={{ from: from }}
                    replace
                    className="font-bold ml-1 text-orange-400 tracking-wider hover:underline"
                  >
                    Register
                  </Link>
                </small>
              </p>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-slate-800 w-full dark:bg-white text-white dark:text-black font-yanoneKaffeesatz text-xl py-1 rounded-lg transition-transform hover:scale-105 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-md mx-auto my-3 pt-3 pb-2 px-4">
          <hr className="h-px bg-slate-500  border-0 dark:bg-white" />
        </div>
        <GoogleLogin from={from}></GoogleLogin>
      </Container>
    </div>
  );
};

export default Login;
