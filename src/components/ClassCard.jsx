import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ClassCard = ({ item }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { availableSeats, classImage, className, instructorName, price, _id } =
    item;
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user?.email) {
      const selectedClasses = {
        classId: _id,
        className,
        studentEmail: user.email,
      };
      axios
        .post("http://localhost:5000/selectedClasses", selectedClasses)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("New Class Selected");
          }
        });
    } else {
      Swal.fire({
        title: "please Login to select new class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={`rounded-3xl shadow-md pb-4 ${
        availableSeats ? "shadow-slate-400 " : "shadow-red-500"
      }`}
    >
      <div className="w-full h-[270px] group rounded-3xl overflow-hidden">
        <img
          src={classImage}
          alt=""
          className="w-full h-[270px] rounded-3xl transition ease-in-out delay-100 hover:scale-105"
        />
      </div>
      <div className="px-5 mt-4">
        <h1 className="text-xl font-bold text-slate-800 dark:text-white tracking-wider font-yanoneKaffeesatz ">
          {className}
        </h1>
        <p className="text-slate-700 dark:text-white text-base font-bold font-archivoNarrow">
          {instructorName}
        </p>
        <p className="text-slate-700 dark:text-white text-base font-bold font-archivoNarrow">
          Available Seats: {availableSeats}
        </p>
        <p className="text-slate-700 dark:text-white text-base font-bold font-archivoNarrow">
          price: ${price}
        </p>

        <div className="flex justify-end">
          {availableSeats ? (
            <button
              onClick={() => handleAddToCart(item)}
              className="custom-button px-4 py-2 rounded-lg border-solid border-slate-900 dark:border-slate-50"
            >
              Enrolled Now
            </button>
          ) : (
            <h1 className="px-4 py-2 rounded-lg bg-red-500 text-slate-800 font-righteous tracking-wider dark:text-white cursor-pointer">
              Filled Up
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
