import errorImage from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImage} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
