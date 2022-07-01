import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function Protect(children) {
  const [islogged, setIslogged] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("islogin"));
    if (login) {
      setIslogged(false);
    } else {
      setIslogged(true);
    }
  },[]);
  
  if(!islogged)
  {
    navigate("/")
  }
  else
  {
    return children
  }
  //   return (
  //     <div></div>
  //   )
}

export default Protect;
