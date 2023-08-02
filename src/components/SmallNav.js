import React from 'react'
import Button from "react-bootstrap/Button";

const SmallNav = () => {
  return (
    <div>
      <div
        className="jumbotron"
        style={{ backgroundColor: "#002147", padding: "10px" }}
      >
        <h1
          className="display-4"
          style={{ color: "white", textDecoration: "underline" }}
        >
          BloggUp
        </h1>
        <p className="lead" style={{ color: "white" }}>
          Read our latest blog posts !!
        </p>
        <hr className="my-4" />
        <p style={{ color: "whitesmoke" }}>
          If want to read all blogs of any category click here...
        </p>
        <Button variant="danger">View All Blogs</Button>
      </div>
    </div>
  );
}

export default SmallNav