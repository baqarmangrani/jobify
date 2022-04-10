import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Main from "../assets/wrappers/Main";

const Landing = () => {
  return (
    <Main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Main>
  );
};

export default Landing;
