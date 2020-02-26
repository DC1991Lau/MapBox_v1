import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { currentUser, loginGoogle, loginFacebook, logout } = useContext(
    AuthContext
  );

  return (
    <nav>
      {!currentUser ? (
        <>
          <button value="google" onClick={() => loginGoogle()}>
            Login Google
          </button>
          <button value="facebook" onClick={() => loginFacebook()}>
            Login Facebook
          </button>
        </>
      ) : (
        <button onClick={() => logout()}>Logout</button>
      )}
    </nav>
  );
};

export default Header;
