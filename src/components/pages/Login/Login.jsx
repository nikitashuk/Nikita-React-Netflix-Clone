import "./Login.css";
import Logo from "../../../assets/logo.png";
import { useState } from "react";

function Login() {
  const [signState, setsignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={Logo} alt="Netflix-Logo" className="login-logo"></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input type="text" placeholder=" Emter your name" />
          ) : (
            <></>
          )}

          <input type="Email" placeholder="Enter your Email Id" />
          <input type="password" placeholder="Enter your Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setsignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setsignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
