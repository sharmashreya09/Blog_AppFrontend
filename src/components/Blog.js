import React from "react";
import { useEffect, useState } from "react";
import SmallNav from "./SmallNav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";


const Blog = (props) => {
  const [catname, setcatName] = useState("");
  const [datares, setDataResult] = useState([]);
  useEffect(() => {
    setcatName(props.category);
    getData(catname);
  });
  

  const getData=async(catname)=>{
         

    let result = await fetch(`http://localhost:5050/getblog/${catname}`);
    result = await result.json();
    setDataResult(result);
  }

  return (
    <div>
      <div>
        <SmallNav />
      </div>
      <div className="container my-3">
        {datares.length > 0 ? (
          <div className="row">
            {datares.map((post) => (
              <div className="col-sm-4">
                <div class="card " style={{ margin: "5px" }}>
                  <h4
                    class="card-header"
                    style={{
                      backgroundColor: "#002244",
                      color: "#F0FFFF",
                    }}
                  >
                    {post.title}
                    <Badge bg="light" text="dark" style={{ marginLeft: "7px" }}>
                      {post.Category}
                    </Badge>
                  </h4>

                  <div
                    class="card-body"
                    style={{
                      backgroundColor: "#0C2340",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Author Name:
                    </span>
                    <p class="card-text" style={{ color: "#F0FFFF" }}>
                      {post.user_name}
                    </p>
                    <span
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      {" "}
                      Content:
                    </span>
                    <p class="card-text" style={{ color: "#F0FFFF" }}>
                      {post.content.trim().split(/\s+/).slice(0, 50).join(" ")}
                      ...
                    </p>
                    <Button variant="dark">
                      <Link to="/readblog">Read More</Link>
                      </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Blog;
