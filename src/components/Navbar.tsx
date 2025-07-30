import { NavLink } from "react-router-dom";

function Navbar() {
  const accessToken = localStorage.getItem("accessToken");

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    alert("User logged out successfully!");
  };

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        {accessToken ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
