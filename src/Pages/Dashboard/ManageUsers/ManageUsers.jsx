import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [secure] = useAxiosSecure();
  const {
    data: userList = [],
    refetch,
    isLoading: usersLoading,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await secure("/all-users");
      console.log(res);
      return res.data;
    },
  });
  if (usersLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  }
  const handleAdmin = (id) => {
    secure.patch(`/user-role/${id}`, { role: "admin" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Role has been updated");
        refetch();
      }
    });
  };
  const handleInstructor = (id) => {
    secure.patch(`/user-role/${id}`, { role: "instructor" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Role has been updated");
        refetch();
      }
    });
  };
  return (
    <div className="w-[calc(100vw-50px)] lg:w-[calc(100vw-420px)]">
      <Helmet>
        <title>{`Harmony Academy | Dashboard | Manage users`}</title>
      </Helmet>
      <SectionTitle
        subTitle="manage"
        title="Users"
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
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, index) => (
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
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td className="capitalize">{item.role}</td>
                <td>
                  <div className="flex items-center gap-1">
                    {(item.role === "student" ||
                      item.role === "instructor") && (
                      <button
                        className="bg-green-500 p-2 rounded text-white hover:bg-green-600"
                        onClick={() => handleAdmin(item._id)}
                      >
                        Make Admin
                      </button>
                    )}
                    {item.role === "student" && (
                      <button
                        className="bg-orange-500 p-2 rounded text-white hover:bg-orange-600"
                        onClick={() => handleInstructor(item._id)}
                      >
                        Make Instructor
                      </button>
                    )}
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

export default ManageUsers;
