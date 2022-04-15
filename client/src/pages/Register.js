import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const data = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [userData, setUserData] = useState(data);

  const toggleMember = () => {
    setUserData({ ...data, isMember: !userData.isMember });
  };

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
        {setUserData.showAlert && <Alert />}
        <h3>{userData.isMember ? "Login" : "Register"}</h3>

        {!userData.isMember && (
          <FormRow
            type="text"
            name="Name"
            value={userData.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="Email"
          value={userData.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="Password"
          value={userData.password}
          handleChange={handleChange}
        />
        <button className="btn btn-block" type="submit">
          Submit
        </button>
        <p>
          {userData.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {!userData.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
