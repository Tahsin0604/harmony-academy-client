import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "../../../components/Container";
import { useEffect, useState, useCallback } from "react";
import { FaBars, FaOpencart, FaUserCircle } from "react-icons/fa";
import Logo from "../../../components/logo";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import ThemeButton from "../../../components/ThemeButton";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole();
  const [selectedClasses] = useSelectedClasses();
  const [isFixed, setFixed] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const handleFixedPosition = () => {
    const scrollingPosition = window.scrollY;
    if (scrollingPosition > 60) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleFixedPosition);
    return () => {
      window.removeEventListener("scroll", handleFixedPosition);
    };
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
    });
    setNavOpen(false);
  }, [location]);

  const handleNavButton = useCallback(() => {
    setNavOpen(!navOpen);
  }, [navOpen]);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-righteous text-lg tracking-wide"
            : "font-righteous text-lg tracking-wide hover:text-orange-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-righteous text-lg tracking-wide"
            : " font-righteous text-lg tracking-wide hover:text-orange-500"
        }
      >
        Instructors
      </NavLink>
      <NavLink
        to="/classes"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-righteous text-lg tracking-wide"
            : " font-righteous text-lg tracking-wide hover:text-orange-500"
        }
      >
        Classes
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-righteous text-lg tracking-wide"
              : " font-righteous text-lg tracking-wide hover:text-orange-500"
          }
        >
          Dashboard
        </NavLink>
      )}
      {(!user || (user && role === "student")) && (
        <div className="mt-3 lg:mt-0 ">
          <div className="relative w-fit">
            <NavLink
              to="/dashboard/selected-classes"
              state={{ from: location }}
              replace
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-righteous text-lg tracking-wide "
                  : " font-righteous text-lg tracking-wide hover:text-orange-500 "
              }
            >
              <FaOpencart className="font-extrabold text-xl"></FaOpencart>
              <div className="absolute px-2 bg-red-600 rounded-lg -top-2 -right-4">
                <p className="text-xs text-white">
                  <small>{selectedClasses.length}</small>
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      )}
      {!user && (
        <div className="mt-2 lg:mt-0">
          <Link
            to="/login"
            state={{ from: location }}
            replace
            className={`custom-button px-2 py-1 rounded-sm ${
              isFixed
                ? " border-black dark:border-white"
                : pathName !== "/"
                ? " border-black dark:border-white"
                : ""
            }`}
          >
            Login
          </Link>
        </div>
      )}
      {user && (
        <div>
          <div
            className="tooltip tooltip-right lg:tooltip-bottom cursor-pointer mt-2 lg:mt-0"
            data-tip={user.displayName}
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt=""
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <FaUserCircle className="h-10 w-10 rounded-full"></FaUserCircle>
            )}
          </div>
        </div>
      )}
      {user && (
        <div className="mt-2 lg:mt-0">
          <button
            onClick={handleLogOut}
            className={`custom-button px-2 py-1 rounded-sm ${
              isFixed
                ? " border-black dark:border-white"
                : pathName !== "/"
                ? " border-black dark:border-white"
                : ""
            }`}
          >
            logout
          </button>
        </div>
      )}
    </>
  );

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-10  transition duration-200 ease-in-out ${
        isFixed
          ? " dark:bg-black shadow dark:shadow-none shadow-slate-500 bg-white text-black dark:text-white pt-0"
          : pathName !== "/"
          ? "-pt-8 bg-white dark:bg-black text-black dark:text-white"
          : "pt-8 text-white"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          <Logo></Logo>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-end gap-8">
              <ul className="flex flex-row justify-center items-center space-x-7">
                {navList}
              </ul>
            </div>
            <ThemeButton></ThemeButton>
            <button className="lg:hidden" onClick={handleNavButton}>
              <FaBars className="fa-solid fa-bars text-lg"></FaBars>
            </button>
          </div>
        </div>
        {navOpen && (
          <div
            className={`flex flex-col   p-4 rounded ${
              isFixed ? " " : pathName !== "/" ? "" : "bg-black bg-opacity-80"
            }`}
          >
            {navList}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
