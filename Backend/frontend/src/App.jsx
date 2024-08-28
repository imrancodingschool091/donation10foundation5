import { Routes, Route, Navigate } from "react-router-dom";
import { IoChatbubbleEllipses } from "react-icons/io5";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PaymentPage from "./components/PaymentPage";
import Recipt from "./components/Recipt";
import ProductPage from "./components/ProductPage";
import { useAuth } from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "./App.css";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  const [authUser] = useAuth(); // Assuming useAuth() returns the authenticated user

  return (
    <>
    
      <Routes>

      <Route
          path="/product"
          element={
            authUser ? (
              <ProductPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            authUser ? (
              <Navigate to="/product" />
            ) : (
              <Signup />
            )
          }
        />
        <Route
          path="/login"
          element={
            authUser ? (
              <Navigate to="/product" />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signup" element={authUser ? <Navigate to="/product" /> : <Signup />} />
        <Route path="/login" element={authUser ? <Navigate to="/product" /> : <Login />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/details/:id" element={<DetailsPage/>}/>
        <Route path="/recipt" element={<Recipt />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <ToastContainer /> {/* Render toast notifications globally */}

      <div className="ChatWithUs">  <a href="https://wa.me/916209410566"><IoChatbubbleEllipses className="icon" /></a> </div>
    </>
  );
};

export default App;
