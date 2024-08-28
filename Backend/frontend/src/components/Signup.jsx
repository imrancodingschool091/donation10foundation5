import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const UserInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

   
    try {

      let response= await axios.post("http://localhost:4000/user/signup",UserInfo)

      if (response.status === 201) {
        // Signup successful
        toast.success(response.data.message, {
          position: "top-center",
        });


        alert("signup sucessfully")
        
        localStorage.setItem("SChatApp",JSON.stringify(response.data.newUser))

        setTimeout(() => {
          window.location.reload()
          
        }, 1000);
      }
    
      
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // User already exists
        toast.warning("User already exists", {
          position: "top-center",
        });
        alert("User already exists");
      } else {
        // Other errors
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
        });
        console.error(error);
      }
      
    }
  };

  return (
    <div>
      <Navbar />

      <section className="donate">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <img src="/websitelogo.png" alt="logo"  />
          </div>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              color: "blue",
              fontSize: "1.1rem",
              
            }}
          >
            Signup
          </h1>

          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
              })}
              className={errors.username ? "input-error" : ""}
            />
            {errors.username && (
              <span className="text-red-600">{errors.username.message}</span>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email.."
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              autoComplete="email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Your Password.."
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              autoComplete="current-password"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password.."
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              autoComplete="current-password"
              className={errors.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && (
              <span className="text-red-600">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button type="submit" className="btn">
            Signup Now
          </button>

          <div style={{marginTop:"-30px"}}>
            <p
              style={{
                fontWeight: "bolder",
                fontFamily: "sans-serif",
                fontSize: ".8rem",
              }}
            >
              <br />
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: ".7rem",
                  textDecoration: "underline",
                  fontFamily:"cursive"
                }}
              >
                login
              </Link>
            </p>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Signup;
