import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnotherPage from "./AnotherPage";

const FormHandling = () => {
  // state
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
  });
  let navigate = useNavigate();

  const handleApply = () => {
      console.log(data,' ddata')
      sessionStorage.setItem('formData',JSON.stringify(data))
    navigate("/home/anotherPage");
  };
  const handleName = (e) => {
    //   setName(e.target.value);
    setData({ ...data, name: e.target.value });
  };
  const handlePassword = (e) => {
    //   setPassword(e.target.value);
    setData({ ...data, password: e.target.value });
  };
  const handleEmail = (e) => {
    //   setEmail(e.target.value);
    setData({ ...data, email: e.target.value });
  };
  return (
    <div className="container ">
      <label>
        <h5>name</h5>
        <input
          name="name"
          type="text"
          value={data?.name}
          onChange={(e) => handleName(e)}
        />
      </label>
      <label>
        <h5>password</h5>
        <input
          name="password"
          type="text"
          value={data?.password}
          onChange={(e) => handlePassword(e)}
        />
      </label>
      <label>
        <h5>email</h5>
        <input
          name="email"
          type="text"
          value={data?.email}
          onChange={(e) => handleEmail(e)}
        />
      </label>
      <button onClick={() => handleApply()}>Apply</button>
    </div>
  );
};

export default FormHandling;
