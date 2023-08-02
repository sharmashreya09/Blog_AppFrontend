import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import UserProfile from "../images/UserProfile.png";
const Header = () => {
  const[username,setUsername]=useState("");
  const[flag,setFlag]=useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(()=>{
      let auth = localStorage.getItem("Users");
      if(auth)
      {
           setFlag(true);
           auth = JSON.parse(auth);
           setUsername(auth.username);
      }
  })
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-1 fst-italic">
            BloggUp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/create"
                  className="nav-link active"
                  aria-current="page"
                >
                  ViewBlogs
                </Link>
              </li>

              {!clicked ? (
                <li className="nav-item">
                  <Button
                    variant="warning"
                    style={{
                      marginTop: "5px",
                      position: "absolute",
                      right: 185,
                      width: "150px",
                    }}
                    onClick={() => {
                      setClicked(true);
                      console.log(clicked);
                    }}
                  >
                    <Link
                      to="/createblog"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Create Blog
                    </Link>
                  </Button>
                </li>
              ) : null}

              {flag ? (
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
              {flag ? (
                <li
                  className="nav-item"
                  style={{ position: "absolute", right: 10, marginTop: "8px" }}
                >
                  <Link to="/profile">
                    <img
                      src={UserProfile}
                      alt="My Image"
                      style={{
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </Link>
                  Welcome {username}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header