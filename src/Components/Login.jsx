import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main_div">
      <div className="logo_div">
        <h1 className="logo">KREEASY</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
          Dolorem maiores nobis rerum nam praesentium amet. Eligendi qui,
          <br></br>
          dolorum unde quo voluptatibus sed accusantium repellat nobis aliquid.
        </p>
      </div>
      <div className="login_div">
        <div className="head_div">
          <h2 className="text_1">Hello!</h2>
          <h3 className="text_2">Good morning</h3>
        </div>
        <div>
          <h2 className="text_4">
            <span className="text_3">Login</span> your account
          </h2>
        </div>
        <div className="form_div">
          <form action="success">
            <div className="user_name">
              <label htmlFor="name"></label>
              <input type="text" placeholder="Username" id="input_name"></input>
            </div>
            <div className="pass_word">
              <label htmlFor="Password"></label>
              <input
                type="password"
                placeholder="Password"
                id="input_pw"
              ></input>
            </div>
          <div className="forgot_pw"><Link to="/reset" className="link1">
              Forgot Password?
            </Link></div>
            <div className="sub_btn">
          
              <button type="submit" id="btn_1">
                Login
              </button>
             
            </div>
            <div>
            <Link to="/signup" className="link2">
              Create account
            </Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
