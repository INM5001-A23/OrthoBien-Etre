import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PiedDePage() {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <Nav className="justify-content-center">
              <Nav.Link style={{ display: 'inline-block' }} onClick={() => navigate("/catalogue")}>Catalogue</Nav.Link>
              <Nav.Link style={{ display: 'inline-block' }} onClick={() => navigate("/faq")}>F.A.Q.</Nav.Link>
              <Nav.Link style={{ display: 'inline-block' }} onClick={() => navigate("/contacts")}>Contacts</Nav.Link>
            </Nav>
          </div>
          <div className="col-auto">
            <p className="text-right">
              &copy; {new Date().getFullYear()} OrthoBien-Être
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
  
 
}

export default PiedDePage;
