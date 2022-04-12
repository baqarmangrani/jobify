import main from "../assets/images/main.svg";
import Main from "../assets/wrappers/Main";
import { Link } from "react-router-dom";

import { Logo } from "../components";

const Landing = () => {
  return (
    <Main>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Clients from the world are looking for candidates for their
            companies.
          </p>
          <Link to="/register" type="button" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Main>
  );
};

export default Landing;
