import React from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
  return  (
    <div className="main_div">
     
<div className="login_div">
        <div className="head_div">
          <h2 className="text_1">Hello!</h2>
          <h3 className="text_2">Good morning</h3>
        </div>
        <div>
          <h2 className="text_4">
            <span className="text_3">Create</span> your account
          </h2>
        </div>
        <div className="form_div">
          <form action="success">
          <div className="user_name">
              <label htmlFor="Email"></label>
              <input type="text" placeholder="Email" id="input_email"></input>
            </div>
            
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
            <div className="pass_word">
              <label htmlFor="Retype password"></label>
              <input
                type="password"
                placeholder="Retype password"
                id="input_pw"
              ></input>
            </div>
          {/* <div className="forgot_pw"><Link to="/reset" className="link1">
              Forgot Password?
            </Link></div> */}
            <div className="sub_btn">
              
              
              <Link to='/Home'><button type="submit" id="btn_2">
              SignUP</button></Link>
              
             
            </div>
            <div>
            <Link to="/login" className="link3">
              Already have an account?Sign In Now
            </Link></div>
          </form>
        </div>
      </div>
      <div className="logo_div">
        <h1 className="logo">KREEASY</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
          Dolorem maiores nobis rerum nam praesentium amet. Eligendi qui,
          <br></br>
          dolorum unde quo voluptatibus sed accusantium repellat nobis aliquid.
        </p>
      </div>
    </div>
  );
}

export default Signup