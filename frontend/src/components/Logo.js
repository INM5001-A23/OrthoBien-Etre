import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Navbar.Brand href="#home">
      <Link to={"/"}>
        <img
          src="/bones.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Link>
    </Navbar.Brand>
  );
}
export default Logo;
