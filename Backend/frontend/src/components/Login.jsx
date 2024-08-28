import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const UserInfo = {
     
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4000/user/login",UserInfo)
      if (response) {
        toast.success(response.data.message,{
          position:"top-center"
        })

        alert("login sucessfully")
        localStorage.setItem("SChatApp",JSON.stringify(response.data.user))
        
        setTimeout(() => {
          window.location.reload()
          
        }, 1000);
      } else {
        toast.warning("Invalid login credentials",{
          position:"top-center"
        })
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Invalid login credentials");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <Navbar />

      <section className="donate">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <img src="/websitelogo.png" alt="logo" />
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
            Login
          </h1>

          <div>
            <input
              type="email"
              placeholder="Your Email.."
              {...register("email", { required: "Email is required" })}
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
              {...register("password", { required: "Password is required" })}
              autoComplete="current-password"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" className="btn">
            Login Now
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
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: ".7rem",
                  textDecoration: "underline",
                  fontFamily:"cursive"
                }}
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Login;
