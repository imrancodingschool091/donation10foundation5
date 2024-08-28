import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaYoutube } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthProvider";

const Logout = () => {
  const [show, setShow] = useState(false);

  let [, setAuthUser] = useAuth();

  const logoutHandler = () => {
    toast.success("Logout..", {
      position: "top-center",
    });

    alert("Logout..")

    setTimeout(() => {
      localStorage.removeItem("SChatApp");
      setAuthUser(null);
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/websitelogo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/product"}>Recently Helped</Link>
            </li>
            <li>
              <Link to={"/product"}>Our Future Mission</Link>
            </li>
            <li>
              <Link to={"/product"}>Our Voulenteer</Link>
            </li>
            <li>
              <Link to={"/product"}>Imidiate Help</Link>
            </li>
          </ul>
          <ul>
           <Link className="btn" onClick={logoutHandler}>Logout</Link>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Logout;
