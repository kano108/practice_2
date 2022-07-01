import React, { useState } from "react";
import "./App.css";
import {useNavigate} from "react-router-dom";

const getData = () => {
  const gdata = localStorage.getItem("practice")
  if(gdata)
  {
    return JSON.parse(localStorage.getItem("practice"));
  }
  else
  {
    return [];
  }
}

function Login() {
  const [Gatdata , setGetData] = useState(getData());
  //console.log("getdata",gatdata);
  const [Email, setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();
  const SubmitLogin=(e)=>{
    e.preventDefault()
    const match_data = Gatdata.find((item)=>item.Email == Email && item.Password == password)
    console.log("matchdata" , match_data);
    if(match_data)
    {
      localStorage.setItem("islogin" ,true)
      navigate("/home");
    } 
    else
    {
       alert("Invalid Email and Password")
    }
  }
  return (
    <div className="login-background">
      <div className="login-form-table">
        <br/>
        
        <h1>LOGIN PAGE</h1>
        <br/>
        <div>
          <label className="form-lable"><h2>Email</h2></label>
          <br/>
          <input
            type="text"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter The Name"
          />
        </div>
        <br/>
        <br/>

        <div>
          <label className="form-lable"><h2>Password</h2></label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter The Password"
          />
        </div>
        <br/>
        <br/>

        <button type="submit" onClick={(e)=>SubmitLogin(e)} className="btn btn-primary">Submit</button>
        <br/>
      </div>
    </div>
  );
}

export default Login;
