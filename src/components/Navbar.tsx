import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
