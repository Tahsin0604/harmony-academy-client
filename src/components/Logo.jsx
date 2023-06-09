import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="font-pacifico text-2xl tracking-wider">
        <span className="text-orange-700">H</span>armony{" "}
        <span className="text-orange-700">A</span>
        cademy
      </h1>
    </Link>
  );
};

export default Logo;
