import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const data = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [userData, setUserData] = useState(data);

  const { isLoading, showAlert, displayAlert } = useAppContext();

  // console.log(showAlert);

  const toggleMember = () => {
    setUserData({ ...userData, isMember: !userData.isMember });
  };

  const handleChange = (e) => {
    // debugger;
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = userData;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(userData);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{userData.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {!userData.isMember && (
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={userData.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
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
