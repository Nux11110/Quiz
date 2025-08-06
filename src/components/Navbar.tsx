import { NavLink } from "react-router-dom";
import { AuthContext, type IAuthContext } from "../App";
import { useContext } from "react";

function Navbar() {
  const { isAuth, setAuthState } = useContext<IAuthContext>(AuthContext);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setAuthState((prev) => ({
      ...prev,
      isAuth: false,
    }));
  };

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        {isAuth ? (
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
