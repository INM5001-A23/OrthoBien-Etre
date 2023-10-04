import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Logo({ path, img }) {
  return (
    <Navbar.Brand>
      <Link to={path}>
        <img
          src={img}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Link>
    </Navbar.Brand>
  );
}

export default Logo;
