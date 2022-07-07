import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../App.css";
import "./Page.css";

function LoginPage() {
  return (
    <>
      <div className="boxMenu">
        <Nav.Link as={NavLink} to="/create-player">
          <p>Create Player</p>
        </Nav.Link>
      </div>
      <div className="boxMenu">
        <Nav.Link as={NavLink} to="/edit-player">
          <p>Edit Player</p>
        </Nav.Link>
      </div>
      <div className="boxMenu">
        <Nav.Link as={NavLink} to="/search-player">
          <p>Search Player</p>
        </Nav.Link>
      </div>
    </>
  );
}

export default LoginPage;
