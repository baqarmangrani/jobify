import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialData = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [registerData, setRegisterData] = useState(initialData);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <FormRow
          type="text"
          name="Name"
          value={registerData.name}
          handleChange={handleChange}
        />
        <FormRow
          type="email"
          name="Email"
          value={registerData.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="Password"
          value={registerData.password}
          handleChange={handleChange}
        />
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
