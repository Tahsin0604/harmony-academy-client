import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import { FaCheck, FaCommentDots, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [secure] = useAxiosSecure();
  const {
    data: classList = [],
    refetch,
    isLoading: classLoading,
  } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await secure("/all-classes");
      return res.data;
    },
  });
  if (classLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  }
  const handleApprove = (id) => {
    secure.patch(`/class-status/${id}`, { status: "approved" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Status has been updated");
        refetch();
      }
    });
  };
  const handleDeny = (id) => {
    secure.patch(`/class-status/${id}`, { status: "denied" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Status has been updated");
        refetch();
      }
    });
  };
  const handleFeedBack = (id) => {
    Swal.fire({
      title: "Feedback",
      input: "textarea",
      inputAttributes: {
        style: "height: 200px",
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async (feedback) => {
        secure.patch(`/class-feedback/${id}`, { feedback }).then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success("Your feedback has been submitted.");
            refetch();
          }
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div className="w-[calc(100vw-50px)] lg:w-[calc(100vw-420px)]">
      <Helmet>
        <title>{`Harmony Academy | Dashboard | Manage classes`}</title>
      </Helmet>
      <SectionTitle
        subTitle="manage"
        title="Classes"
        color={true}
        position="right"
      ></SectionTitle>

      <div className="overflow-x-auto  p-8 mt-4 bg-white dark:bg-slate-800 border rounded-sm  ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-slate-900 dark:text-white">
              <th></th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classList.map((item, index) => (
              <tr
                key={item._id}
                className="text-slate-900 dark:text-white font-archivoNarrow text-base"
              >
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.availableSeats}</td>
                <td>{item.price}</td>
                <td>
                  <p
                    className={`${
                      item.status === "approved"
                        ? "text-green-500"
                        : item.status === "denied"
                        ? "text-red-500"
                        : "text-orange-500"
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <button
                      className={`bg-green-500 p-2 rounded  text-white ${
                        item.status !== "pending" ? "" : "hover:bg-green-600"
                      }}`}
                      title="Approve"
                      disabled={item.status !== "pending"}
                      onClick={() => handleApprove(item._id)}
                    >
                      <FaCheck></FaCheck>
                    </button>
                    <button
                      className={`bg-red-500 p-2 rounded  text-white ${
                        item.status !== "pending" ? "" : "hover:bg-red-600"
                      }}`}
                      title="Deny"
                      disabled={item.status !== "pending"}
                      onClick={() => handleDeny(item._id)}
                    >
                      <FaTimes></FaTimes>
                    </button>
                    <button
                      className="bg-sky-300 p-2 rounded hover:bg-sky-400 text-white"
                      title="Feedback"
                      onClick={() => handleFeedBack(item._id)}
                    >
                      <FaCommentDots></FaCommentDots>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
