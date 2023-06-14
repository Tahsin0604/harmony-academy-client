import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const imageHostingKey = import.meta.env.VITE_IMAGE_KEY;
const EditClass = () => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [secure] = useAxiosSecure();
  const {
    data: classDetails,
    refetch,
    isLoading: LoadingDetails,
  } = useQuery({
    queryKey: ["classes", params?.id],
    queryFn: async () => {
      const res = await secure(`/classes/${params.id}`);
      return res.data;
    },
  });
  if (LoadingDetails) {
    console.log();
  }
  const navigate = useNavigate();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const onSubmit = (data) => {
    const { name, totalSeat, price } = data;
    if (data.photo[0] == undefined) {
      const editClass = {
        className: name,
        classImage: classDetails.classImage,
        instructorName: classDetails.instructorName,
        instructorEmail: classDetails.instructorEmail,
        totalSeats: parseInt(totalSeat),
        EnrolledStudents: classDetails.EnrolledStudents,
        price: parseFloat(price.toString(0)),
        availableSeats: parseInt(totalSeat) - classDetails.EnrolledStudents,
        status: classDetails.status,
        feedback: classDetails.feedback,
      };
      secure.patch(`/classes/${classDetails._id}`, editClass).then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Class details updated");
          reset();
          refetch();
          navigate("/dashboard/my-classes");
        }
      });
    } else {
      const formData = new FormData();
      formData.append("image", data.photo[0]);
      axios.post(imageHostingUrl, formData).then((res) => {
        if (res.data.success) {
          const imgUrl = res.data.data.display_url;
          const editClass = {
            className: name,
            classImage: imgUrl,
            instructorName: classDetails.instructorName,
            instructorEmail: classDetails.instructorEmail,
            totalSeats: parseInt(totalSeat),
            EnrolledStudents: classDetails.EnrolledStudents,
            price: parseFloat(price.toString(0)),
            availableSeats: parseInt(totalSeat) - classDetails.EnrolledStudents,
            status: classDetails.status,
            feedback: classDetails.feedback,
          };

          secure
            .patch(`/classes/${classDetails._id}`, editClass)
            .then((res) => {
              if (res.data.modifiedCount > 0) {
                toast.success("Class details updated");
                reset();
                refetch();
                navigate("/dashboard/my-classes");
              }
            });
        }
      });
    }
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="250"
      className=""
    >
      <Helmet>
        <title>{`Harmony Academy | Dashboard | Edit Class`}</title>
      </Helmet>
      <div className="text-center">
        <SectionTitle
          subTitle="edit"
          title="Class"
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
                  Class name
                </span>
              </label>
              <input
                type="text"
                defaultValue={classDetails?.className}
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
                {...register("photo")}
                className="file-input file-input-bordered w-full outline-none text-black  text-lg"
              />
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
                  defaultValue={classDetails?.totalSeats}
                  {...register("totalSeat", {
                    required: true,
                    pattern: /^[1-9]\d*$/,
                  })}
                  className="py-1 px-2 w-full border outline-none border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
                />
                {errors.totalSeat?.type === "required" && (
                  <p className="text-red-600">Total seats is required</p>
                )}
                {errors.totalSeat?.type === "pattern" && (
                  <p className="text-red-600">
                    Must be a positive Integer number greater than 0
                  </p>
                )}
              </div>
              {/* price */}
              <div className="flex flex-col mt-4 w-1/2">
                <label htmlFor="price" className="mb-1">
                  <span className="font-yanoneKaffeesatz text-lg">Price</span>
                </label>
                <input
                  type="text"
                  defaultValue={classDetails?.price}
                  {...register("price", {
                    required: true,
                    pattern: /^[0-9]*\.?[0-9]+$/,
                  })}
                  className="py-1 px-2 border outline-none w-full border-slate-500 rounded-md font-yanoneKaffeesatz text-lg dark:text-black"
                />
                {errors.price?.type === "required" && (
                  <p className="text-red-600">Price is required</p>
                )}
                {errors.price?.type === "pattern" && (
                  <p className="text-red-600">Must be a positive number</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-slate-800 w-full dark:bg-white text-white dark:text-black font-yanoneKaffeesatz text-xl py-1 rounded-lg transition-transform hover:scale-105 ease-in-out"
              >
                Edit Class
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EditClass;
