import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import data from "../Data/data.json";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Details.css";
import { useAuth } from "../Context/AuthProvider"; // Ensure this import path is correct
import { toast } from "react-toastify"; // Ensure react-toastify is installed and configured

const DetailsPage = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  
  const [, setAuthUser] = useAuth();

  const logoutHandler = () => {
    toast.success("Logout successful", {
      position: "top-center",
    });

    alert("Logging out...");

    setTimeout(() => {
      localStorage.removeItem("SChatApp");
      setAuthUser(null);
      navigate("/login"); // Redirect to login page after logout
    }, 1000);
  };

  return (
    <>
      <div>
        <nav className={show ? "navbar show_navbar" : "navbar"}>
          <div className="logo">
            <img src="/websitelogo.png" alt="logo" />
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to={""}>Recently Helped</Link>
              </li>
              <li>
                <Link to={""}>Our Future Mission</Link>
              </li>
              <li>
                <Link to={""}>Our Volunteers</Link>
              </li>
              <li>
                <Link to={""}>Immediate Help</Link>
              </li>
            </ul>
            <ul>
              <button className="btn" onClick={logoutHandler}>Logout</button>
            </ul>
          </div>
          <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
        </nav>
      </div>

      <div className="details-page">
        {item ? (
          <>
            <div className="details-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="details-content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {item.details && (
                <>
                  <h2>Mission</h2>
                  <p>{item.details.mission}</p>
                  <h2>Programs</h2>
                  <ul>
                    {item.details.programs.map((program, index) => (
                      <li key={index}>
                        <h3>{program.name}</h3>
                        <p>{program.description}</p>
                      </li>
                    ))}
                  </ul>
                  <h2>Beneficiaries</h2>
                  <p>{item.details.beneficiaries}</p>
                </>
              )}
            </div>
          </>
        ) : (
          <p>Details not found.</p>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
