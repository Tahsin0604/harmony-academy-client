import { FaTrashAlt } from "react-icons/fa";

import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClasses();
  const [secure] = useAxiosSecure();
  const navigate = useNavigate();
  const deleItem = async (id) => {
    const res = await secure.delete(`/selectedClasses/${id}`);
    if (res.data.deletedCount > 0) {
      refetch();
      toast.success("Items Deleted");
    }
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleItem(id);
      }
    });
  };
  const handlePay = async (selectedId, classId) => {
    const avilability = await secure.patch(
      `/availabe-classes?classId=${classId}&selectedClassId=${selectedId}`
    );
    if (avilability.data.availableSeats) {
      navigate(`/dashboard/payment/${selectedId}`);
    }
    if (avilability.data.modifiedCount > 0) {
      refetch();
      toast.error("This class is already filled up. Try next time.");
    }
  };
  return (
    <div className="w-[calc(100vw-50px)] lg:w-[calc(100vw-420px)]">
      <Helmet>
        <title>{`Harmony Academy | Dashboard | Selected Classes`}</title>
      </Helmet>
      <SectionTitle
        subTitle="explore"
        title="selected Class"
        color={true}
        position="right"
      ></SectionTitle>

      <div className="overflow-x-auto  p-8 mt-4 bg-white dark:bg-slate-800 border rounded-sm  ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-slate-900 dark:text-white">
              <th></th>
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((item, index) => (
              <tr
                key={item._id}
                className="text-slate-900 dark:text-white font-archivoNarrow text-base"
              >
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.price}</td>
                <td>
                  {item.status ? (
                    <p className="text-red-500">{item.status}</p>
                  ) : (
                    <button
                      onClick={() => handlePay(item._id, item.classId)}
                      className="bg-red-500 p-1 rounded hover:bg-red-600"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 p-2 rounded hover:bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
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

export default SelectedClasses;
