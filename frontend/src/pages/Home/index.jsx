import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userVerifiyHandler } from "../../apiHandler";

const Home = () => {
  const history = useNavigate();
  const authenticateUser = async () => {
    const token = localStorage.getItem("token");
    const isValidUser = await userVerifiyHandler(`/home?token=${token}`);
    console.log("auth: ", isValidUser);
    if (!isValidUser.data.login) {
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      history("/signin");
    }
  };

  useEffect(() => {
    authenticateUser();

    // return () => {
    //   localStorage.removeItem("login");
    //   localStorage.removeItem("token");
    // };
  }, []);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <NavLink to="/signin">Go to sign in page</NavLink>
    </div>
  );
};

export default Home;
