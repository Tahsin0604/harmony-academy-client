import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const ClassCard = ({ item, index }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { availableSeats, classImage, className, instructorName, price, _id } =
    item;
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user?.email) {
      const cartItem = {
        classId: _id,
        className,
        classImage,
        instructorName,
        price,
        studentEmail: user.email,
      };
      axios.post("");
    } else {
      console.log("s");
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={`rounded-3xl shadow-md pb-6 ${
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

        <div className="flex justify-end gap-3">
          {availableSeats ? (
            <Link
              onClick={() => handleAddToCart(item)}
              to={`/enrolled/${_id}`}
              className="custom-button px-4 py-2 rounded-lg border-solid border-slate-900 dark:border-slate-50"
            >
              Enrolled Now
            </Link>
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
