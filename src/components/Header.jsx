import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router";
const Header = () => {

  // const btnName ="Login";

  const [btnNameReact,setbtnNameReact] = useState("Login");
  console.log("Header render")

  // if No dependence array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => called everrything btnNameReact is updated
  useEffect(()=>{
    console.log("useEffect called"); 
  },[btnNameReact])
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src=  {LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login"
             onClick={()=>{
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
              }}
              >{btnNameReact}
              </button> 
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
