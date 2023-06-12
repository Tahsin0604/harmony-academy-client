import {
  FaBars,
  FaBookOpen,
  FaBookReader,
  FaChalkboardTeacher,
  FaHome,
  FaOpencart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import ThemeButton from "../components/ThemeButton";
import useRole from "../hooks/useRole";
import { AiFillRead } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import useSelectedClasses from "../hooks/useSelectedClasses";

const Dashboard = () => {
  const [role] = useRole();
  const { user, logOut } = useAuth();
  const [selectedClasses] = useSelectedClasses();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-2">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="cursor-pointer p-1 drawer-button lg:hidden"
          >
            <FaBars></FaBars>
          </label>
          <div className="mt-10">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-slate-200 dark:bg-black font-righteous text-sm tracking-wide text-slate-800 dark:text-white">
            {/* Sidebar content here */}
            <div className="w-full text-center mb-8">
              <div className="w-fit mx-auto">
                <Logo></Logo>
              </div>
            </div>
            <div className="w-full mb-4 text-center ">
              <img
                src={user.photoURL}
                alt=""
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h1 className="text-lg mt-2 capitalize">{user.displayName}</h1>
              <p className="uppercase ">
                <small>{role}</small>
              </p>
            </div>
            {role === "admin" ? (
              <>
                {/* <li  className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive }) =>
                      (isActive ? "text-orange-500" : "text-black")
                    }
                  >
                    <FaHome className="text-xl"></FaHome> Admin Home
                  </NavLink>
                </li> */}
                <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    to="/dashboard/manage-classes"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    <SlBookOpen className="text-xl"></SlBookOpen> Manage Classes
                  </NavLink>
                </li>

                <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    to="/dashboard/manage-users"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    <FaUsers className="text-xl"></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : role === "instructor" ? (
              <>
                {/* <li  className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive }) => (isActive ? "text-orange-500" : "text-black")}
                  >
                    <FaHome className="text-xl"></FaHome> Instructor Home
                  </NavLink>
                </li> */}
                <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    to="/dashboard/create-new-class"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    <AiFillRead className="text-xl"></AiFillRead> Add a class
                  </NavLink>
                </li>
                <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    to="/dashboard/my-classes"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    <FaBookOpen className="text-xl"></FaBookOpen> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                    to="/dashboard/selected-classes"
                  >
                    <div className="w-fit">
                      <FaOpencart className="text-xl"></FaOpencart>
                    </div>
                    Selected classes
                    <div className=" px-2 bg-red-500 rounded-md">
                      <p className="text-xs font-extrabold text-white">
                        <small>{selectedClasses.length}</small>
                      </p>
                    </div>
                  </NavLink>
                </li>
                <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                    to="/dashboard/enrolled-classes"
                  >
                    <div className="w-fit">
                      <AiFillRead className="text-xl"></AiFillRead>
                    </div>
                    Enrolled classes
                  </NavLink>
                </li>
                <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
                  <NavLink
                    to="/dashboard/payment-history"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    <FaWallet className="text-xl"></FaWallet>Payment history
                  </NavLink>
                </li>
              </>
            )}
            <hr className="h-px m-4 bg-slate-500  border-0 dark:bg-white" />
            <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
              <Link to="/">
                <FaHome className="text-xl"></FaHome> Home
              </Link>
            </li>
            <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
              <Link to="/instructors">
                <FaChalkboardTeacher className="text-xl"></FaChalkboardTeacher>{" "}
                Instructors
              </Link>
            </li>
            <li className=" dark:hover:bg-slate-900 dark:hover:rounded-lg">
              <Link to="/classes">
                <FaBookReader className="text-xl"></FaBookReader> Classes
              </Link>
            </li>

            <div className="w-fit flex gap-4 items-center mt-4 ml-4">
              <p>Change theme</p>
              <ThemeButton></ThemeButton>
            </div>
            <div className="mt-auto mx-4" onClick={handleLogOut}>
              <button className="custom-button w-full py-2 rounded-md text-base border-slate-800 dark:border-white">
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
