import React from "react";
import logo from "../../assets/logoAndName.png";

const Navbar = () => {
  const cont = {
    display: "flex",
    height: "6rem",
    width: "100%",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  };

  const buttonDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={cont}>
      <img src={logo} alt="BankOn logo" />
      <div style={buttonDiv}>
        <button className="btn btn-primary p-2 mr-2">SignIn</button>
        <button className="btn btn-primary p-2 mr-2">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
