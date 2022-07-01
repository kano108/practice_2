import React, { useState } from "react";
import "./App.css";

function Register() {
  const [item, setItems] = useState([]);
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Address, setAddress] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    const alldata = {
      Id : new Date().getTime().toString(),
      Name : name,
      Email : Email , 
      Password : password,
      Address : Address,
    }
    setItems([...item , alldata])
    localStorage.setItem("practice" , JSON.stringify([...item , alldata]))
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
  }

  return (
    <div className="register-background">
      <div className="form-table">
        <br />
        <h1>REGISTER PAGE</h1>
        <br />

        <form onSubmit={(e) => addItem(e)}>
          <div className="form-input">
            <label className="form-lable">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter The Name"
            />
          </div>
          <br />

          <div className="form-input">
            <label className="form-lable">Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter The Email"
            />
          </div>
          <br />

          <div className="form-input">
            <label className="form-lable">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter The Password"
            />
          </div>
          <br />

          <div className="form-input">
            <label className="form-lable">Address</label>
            <textarea
              className="form-control"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              name="Enter The Address"
              placeholder="Enter The Address"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <br />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
