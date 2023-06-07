import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { useEffect, useState, useCallback } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isFixed, setFixed] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
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
  const handleNavButton = useCallback(() => {
    setNavOpen(!navOpen);
  }, [navOpen]);
  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-righteous text-lg tracking-wide"
            : "text-white font-righteous text-lg tracking-wide"
        }
      >
        Home
      </NavLink>
    </>
  );
  return (
    <nav
      className={`fixed inset-x-0 dark:text-white dark:bg-black transition duration-200 ease-in-out ${
        isFixed ? " bg-blue-500  shadow-md shadow-slate-700 pt-0" : " pt-8"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <h1 className="font-pacifico text-2xl tracking-wider">
              <span className="text-orange-700">H</span>armony{" "}
              <span className="text-orange-700">A</span>
              cademy
            </h1>
          </Link>

          <div className="flex items-center">
            <div className="hidden lg:flex items-end gap-8">
              <ul className="flex flex-row justify-center items-center space-x-6">
                {navList}
              </ul>
            </div>
            <button className="nav-button lg:hidden" onClick={handleNavButton}>
              <FaBars className="fa-solid fa-bars text-lg"></FaBars>
            </button>
          </div>
        </div>
        {navOpen && <div className="flex flex-col">{navList}</div>}
      </Container>
    </nav>
  );
};

export default NavBar;
