import { useState } from "react";
import showPassIcon from "./assets/open-eye.svg";
import hidePassIcon from "./assets/eye-slash.svg";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="login">
        <div className="left wrapper">
          <h1>
            Manage Your Bank <br />
            With Our System
          </h1>
        </div>
        <span className="line"></span>
        <div className="right wrapper">
          <h3>Login</h3>
          <form action="#">
            <label htmlFor="username">
              <div>Username</div>
              <input type="username" id="username" />
            </label>
            <label htmlFor="password">
              <div>Password</div>
              <input type={showPassword ? "text" : "password"} id="password" />
              <div
                className="show-hide-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? hidePassIcon : showPassIcon}
                  width={20}
                  height={20}
                />
              </div>
            </label>
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
