import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import { Helmet } from "react-helmet-async";

const EditClass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="250"
      className="mt-28 mb-12 min-h-[calc(100vh-380px)]"
    >
      <Helmet>
        <title>Harmony Academy | Edit Course</title>
      </Helmet>
      <div className="text-center">
        <SectionTitle
          title="Edit Course"
          color={true}
          position="right"
        ></SectionTitle>
      </div>
      <Container>
        <div className="max-w-lg mx-auto rounded-lg py-8 px-6 shadow-md bg-slate-50 dark:bg-slate-800 mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                <span className="font-yanoneKaffeesatz text-lg">
                  Course name
                </span>
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
            <div className="flex flex-row gap-4 w-full">
              {/* totalSeat */}
              <div className="flex flex-col mt-4 w-1/2">
                <label htmlFor="email" className="mb-1">
                  <span className="font-yanoneKaffeesatz text-lg">
                    Total Seats
                  </span>
                </label>
                <input
                  type="text"
                  {...register("totalSeat", { required: true })}
                  className="py-1 px-2 w-full border outline-none border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
                />
                {errors.totalSeat?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
              </div>
              {/* price */}
              <div className="flex flex-col mt-4 w-1/2">
                <label htmlFor="price" className="mb-1">
                  <span className="font-yanoneKaffeesatz text-lg">Price</span>
                </label>
                <input
                  type="email"
                  {...register("price", { required: true })}
                  className="py-1 px-2 border outline-none w-full border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
                />
                {errors.price?.type === "required" && (
                  <p className="text-red-600">Price is required</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-slate-800 w-full dark:bg-white text-white dark:text-black font-yanoneKaffeesatz text-xl py-1 rounded-lg transition-transform hover:scale-105 ease-in-out"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EditClass;
