import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
const Profile = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [user_mail, setUser_Email] = useState("");
  const [blog, setBlog] = useState([]);
  const[info,setInfo]=useState([])
  
  useEffect(() => {
    let text="Info not Added Please Click Update Information"
    getuserBlogs();
    getpersonalData();
  });

  const getpersonalData=async()=>{
     let response = await fetch(`http://localhost:5050/personalinfo/${user_mail}`);
    response = await response.json();
     setInfo(response);
     console.log(response);    
  }
  const getuserBlogs =async()=>{
     let auth = localStorage.getItem("Users");
     auth = JSON.parse(auth);
     setName(auth.name);
     setUserName(auth.username);
     setUser_Email(auth.email);
    let result = await fetch(`http://localhost:5050/getblogs/${user_mail}`);
    result = await result.json();
     setBlog(result);
     console.log(result);
  };

  return (
    <div>
      <div className="box1" style={{ display: "flex" }}>
        <div className="row">
          <div className="small-12 medium-2 large-2 columns">
            <div className="circle" style={{ marginTop: "-65px" }}>
              <img
                className="profile-pic"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                alt="user-profile"
              />
            </div>
            <div
              className="p-image"
              style={{ marginTop: "-60px", position: "absolute", left: 100 }}
            >
              <i
                className="fa fa-camera upload-button"
                style={{ color: "grey" }}
              ></i>
              <input className="file-upload" type="file" accept="image/*" />
            </div>
          </div>
        </div>
        <div className="user_info" style={{ marginLeft: "170px" }}>
          <span>
            <h4 style={{ textDecoration: "underline" }}>{name}</h4>
          </span>
          <span>
            <h5 style={{ textDecoration: "underline" }}>
              Username: {username}
            </h5>
          </span>
          <span>
            <h6> E-mail: {user_mail}</h6>
          </span>
          <span>
            <Button variant="info"> Edit Profile</Button>
          </span>
        </div>
      </div>
      <h5
        className="container"
        style={{ color: "grey", position: "absolute", top: 160, left: 70 }}
      >
        Your Posted Blogs!!
      </h5>
      <div className="blog and personal" style={{ display: "flex" }}>
        <div className="blogs" style={{ marginLeft: "40px", width: "60%" }}>
          <div className="timeline">
            <div className="outer">
              {blog.map((item, index) => (
                <div className="card cd">
                  <div className="info">
                    <div style={{ display: "flex" }}>
                      <h3 className="titlecd">{item.title}</h3>
                      <span style={{ position: "absolute", right: 10 }}>
                        {" "}
                        Date: 1st Aug 2023
                      </span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span
                        stylen={{
                          fontSize: "17px",
                          textDecoration: "underline",
                        }}
                      >
                        Category :
                      </span>
                      <span style={{ textDecoration: "underline" }}>
                        {item.Category}
                      </span>
                    </div>
                    <p>
                      {item.content.trim().split(/\s+/).slice(0, 15).join(" ")}
                      ...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="personal"
          style={{ marginTop: "30px", maxHeight: "500px", padding: "5px" }}
        >
          <ul className="profile-info-list">
            <li className="title" style={{ fontSize: "15px" }}>
              <span style={{ textDecoration: "underline" }}>
                PERSONAL INFORMATION
              </span>
              <Button variant="info" style={{ margin: "10px" }}>
                <Link
                  to="/addprofile"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Add Information
                </Link>
              </Button>
              <Button variant="primary" style={{ margin: "10px" }}>
                <Link
                  to="/updateprofile"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Update Information
                </Link>
              </Button>
            </li>
            {info.map((item, index) => (
              <div>
                <li>
                  <div
                    className="field"
                    style={{ textDecoration: "underline" }}
                  >
                    Occupation:
                  </div>
                  
                  <div className="value">{item.Occupation}</div>
                  
                </li>
                <li>
                  <div
                    className="field"
                    style={{ textDecoration: "underline" }}
                  >
                    Skills:
                  </div>
                  <div className="value">{item.Skills}</div>
                </li>
                <li>
                  <div
                    className="field"
                    style={{ textDecoration: "underline" }}
                  >
                    Date of Birth:
                  </div>
                  <div className="value"> {item.DOB}</div>
                </li>
                <li>
                  <div
                    className="field"
                    style={{ textDecoration: "underline" }}
                  >
                    Country:
                  </div>
                  <div className="value">{item.Country}</div>
                </li>
                <li>
                  <div
                    className="field"
                    style={{ textDecoration: "underline" }}
                  >
                    Add Link to Instagram ,Linkedin,Twitter Profile
                  </div>
                  <div className="value">
                    <address className="m-b-0">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/instagram-512.png"
                        style={{ width: "26px", height: "24px", margin: "5px" }}
                      ></img>
                      <a
                        href={item.Instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.Instagram}
                      </a>
                      <br />
                      <img
                        src="https://w7.pngwing.com/pngs/93/587/png-transparent-linkedin-logo-linkedin-logo-computer-icons-business-symbol-linkedin-icon-miscellaneous-blue-angle-thumbnail.png"
                        style={{ width: "26px", height: "24px", margin: "5px" }}
                      ></img>
                      <a
                        href={item.Linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.Linkedin}
                      </a>
                      <br />
                      <img
                        src="https://www.pngitem.com/pimgs/m/556-5566902_twitter-icon-ios-7-png-image-twitter-app.png"
                        style={{ width: "26px", height: "24px", margin: "5px" }}
                      ></img>
                      <a
                        href={item.TwitterProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.TwitterProfile}
                      </a>
                    </address>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
