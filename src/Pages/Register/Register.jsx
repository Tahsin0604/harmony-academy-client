import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { toast } from "react-hot-toast";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";
const imageHostingKey = import.meta.env.VITE_IMAGE_KEY;

const Register = () => {
  const { signUp, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const navigate = useNavigate();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const [passwordEye, setPasswordEye] = useState(false);
  const [passwordEye2, setPasswordEye2] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const handlePasswordClick2 = () => {
    setPasswordEye2(!passwordEye2);
  };
  const watchPassword = watch("password");
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    axios.post(imageHostingUrl, formData).then((res) => {
      if (res.data.success) {
        const imgUrl = res.data.data.display_url;
        const { name, email, gender, password } = data;
        let genderValue = gender === "Select" ? "" : gender;
        const newUser = {
          image: imgUrl,
          name,
          email,
          role: "student",
          gender: genderValue,
        };

        signUp(email, password)
          .then(() => {
            updateUser(name, imgUrl)
              .then(() => {
                axios
                  .post(
                    "https://harmony-academy-server.vercel.app/users",
                    newUser
                  )
                  .then((res) => {
                    if (res.data.insertedId) {
                      toast.success("Account Created");
                      reset();
                      navigate(from, { replace: true });
                    }
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            if (
              err.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              reset();
              toast.error("user Already exist");
            }
          });
      }
    });
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="250"
      className="mt-28 mb-12 min-h-[calc(100vh-380px)]"
    >
      <Helmet>
        <title>Harmony Academy | Register</title>
      </Helmet>
      <div className="text-center">
        <SectionTitle
          title="Register Now"
          color={true}
          position="right"
        ></SectionTitle>
      </div>
      <Container>
        <div className="max-w-md mx-auto rounded-lg py-8 px-6 shadow-md bg-slate-50 dark:bg-slate-800 mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                <span className="font-yanoneKaffeesatz text-lg">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="py-1 px-2 border outline-none border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600">Name is required</p>
              )}
            </div>
            {/* email */}
            <div className="flex flex-col mt-4">
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
            {/* Photo */}
            <div className="flex flex-col mt-4">
              <label htmlFor="photo" className="mb-1">
                <span className="font-yanoneKaffeesatz text-lg">Photo</span>
              </label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input file-input-bordered w-full outline-none text-black  text-lg"
              />

              {errors.photo?.type === "required" && (
                <p className="text-red-600">Photo is required</p>
              )}
            </div>
            {/* Gender */}
            <div className="flex flex-col mt-4">
              <label htmlFor="gender" className="mb-1">
                <span className="font-yanoneKaffeesatz text-lg">Gender</span>
              </label>
              <select
                defaultValue="Select"
                {...register("gender")}
                className="select select-bordered w-full text-black outline-none"
              >
                <option disabled>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            {/* password */}
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
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/,
                  })}
                  className="py-1 pl-2 pr-8 border w-full outline-none border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have at least one Uppercase and one Special
                    Character.
                  </p>
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
            {/* confirm */}
            <div className="flex flex-col mt-4">
              <label htmlFor="confirm" className="mb-1">
                <span className="font-yanoneKaffeesatz text-lg">
                  Confirm Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={passwordEye2 === false ? "password" : "text"}
                  {...register("confirm", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/,
                    validate: (value) =>
                      value === watchPassword ? true : false,
                  })}
                  className="py-1 pl-2 pr-8 border w-full outline-none border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
                />
                {errors.confirm?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.confirm?.type === "validate" && (
                  <p className="text-red-600">Password does not match</p>
                )}
                {errors.confirm?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.confirm?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have at least one Uppercase and one Special
                    Character.
                  </p>
                )}
                <div className="absolute top-[6px] right-1 text-black text-2xl">
                  {passwordEye2 === false ? (
                    <AiFillEyeInvisible
                      onClick={handlePasswordClick2}
                    ></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye onClick={handlePasswordClick2}></AiFillEye>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 flex">
              <p className="text-lg font-yanoneKaffeesatz">
                <small>
                  Already have an account.{" "}
                  <Link
                    to="/login"
                    state={{ from: from }}
                    replace
                    className="font-bold ml-1 text-orange-400 tracking-wider hover:underline"
                  >
                    Login
                  </Link>
                </small>
              </p>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-slate-800 w-full dark:bg-white text-white dark:text-black font-yanoneKaffeesatz text-xl py-1 rounded-lg transition-transform hover:scale-105 ease-in-out"
              >
                Register
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

export default Register;
