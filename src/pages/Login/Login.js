import React, { useState } from "react";
import cbnitsLogo from "../../assets/cbnitsLogo.png";
import logo from "../../assets/logo.svg";
import Login1 from "../../assets/login1.svg";
import Login2 from "../../assets/login2.svg";
import Login3 from "../../assets/login3.svg";
import Login4 from "../../assets/login4.svg";
import Login5 from "../../assets/login5.svg";
import "./Login.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setpassword] = useState(" ");
  const [error, setError] = useState(false);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const login = () => {
    // e.preventdefault();
    if (loginId === "" || password === "") {
      setError(true);
      console.log(error);
    } else {
      setError(false);
      navigate("/");
      console.log(error);
      localStorage.setItem("isLogedIn", true);
    }
  };
  return (
    <>
      <header className="loginHeader">
        <span className="logfinHeaderSpan">
          <img src={cbnitsLogo} alt="cbnit logo" className="cbnitsLogo" />
        </span>
      </header>
      <div className="mainDiv">
        <div className="rightDiv">
          <form className="loginForm">
            <span className="formHeader">
              <img src={logo} alt="GreytHr logo" className="formHeaderLogo" />
              <h1 className="formTitle">Hello there!</h1>
            </span>
            {error ? (
              <div className="error">Username and password is required.</div>
            ) : (
              <span></span>
            )}
            <div className="formInputSpan">
              <label>Login ID</label>
              <input
                type="text"
                placeholder="Employee No"
                className={`input ${error ? "errorInput" : ""}`}
                onChange={(e) => setLoginId(e.target.value)}
              />
            </div>
            <div className="formInputSpan">
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                className={`input ${error ? "errorInput" : ""}`}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div>
              <div className="forgotPassword">
                <a
                  href="https://cbnits.greythr.com/uas/portal/auth/forgot"
                  className="forgotPasswordLink"
                >
                  Forgot password?
                </a>
              </div>
              <Button variant="contained" className="submit" onClick={login}>
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="leftDiv">
          <Slider {...settings}>
            <div className="slider">
              <img src={Login1} alt="img" />
              <div className="sliderDiv">
                <h4>Anytime ,Anywhere Access</h4>
                <div className="sliderFooter">
                  Employee Self Service at your finger
                </div>
              </div>
            </div>
            <div className="slider">
              <img src={Login2} alt="img" />
              <div className="sliderDiv">
                <h4>Simplify Communication</h4>
                <div className="sliderFooter">
                  {" "}
                  Communicate to Employees via Feeds, SMS, Email{" "}
                </div>
              </div>
            </div>
            <div className="slider">
              <img src={Login2} alt="img" />
              <div className="sliderDiv">
                <h4>Tasks and Checklists</h4>
                <div className="sliderFooter">
                  {" "}
                  Automate & streamline your daily tasks{" "}
                </div>
              </div>
            </div>
            <div className="slider">
              <img src={Login3} alt="img" />
              <div className="sliderDiv">
                <h4>Letter Creator Suite</h4>
                <div className="sliderFooter">
                  {" "}
                  Generate best-in-class letters in less than a minute{" "}
                </div>
              </div>
            </div>
            <div className="slider">
              <img src={Login4} alt="img" />
              <div className="sliderDiv">
                <h4>Anytime ,Anywhere Access</h4>
                <div className="sliderFooter">
                  Employee Self Service at your finger
                </div>
              </div>
            </div>
            <div className="slider">
              <img src={Login5} alt="img" />
              <div className="sliderDiv">
                <h4>Anytime ,Anywhere Access</h4>
                <div className="sliderFooter">
                  Employee Self Service at your finger
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Login;
