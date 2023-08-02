import React ,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom';

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  
  useEffect(() => {
    let auth = localStorage.getItem("Users");
    console.log(auth);
    if (!auth) {
      navigate("/login");
    }

  });
  const handleLogin=async(e)=>{
            e.preventDefault();
            let flag=0;
            if(email.length===0 ||password.length===0)
            {
               flag=1;
            }
            if(flag===0)
            {
                    let result = await fetch("http://localhost:5050/login", {
                      method: "POST",
                      body: JSON.stringify({ email, password }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    });

                    result = await result.json();
                    if (result.username) {
                      localStorage.setItem("Users", JSON.stringify(result));
                      navigate("/");
                    }
                    else {
                      alert("sorry Wrong details ! No such User Exists");
                    }
            }
            else if(flag===1) 
            {
              alert("Sorry Fill the details");
            }
          
  }
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEyG3wWx2ZIDV3U4p1LqH8hhMdZGpIhOwzbLb-ORrFrqQNKmobBkimj3AxXvBvq4rQAA&usqp=CAU")',
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              padding: "5px",
              textDecoration: "underline",
            }}
          >
            <h3>Login User </h3>
          </div>
          <form
            className="w-50 m-auto mt-5 border bg-dark border-success rounded"
            style={{ color: "white" }}
          >

            <div className="m-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value);
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone.
              </div>
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" name="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
              }} />
            </div>
            <button type="submit" className="m-3 btn btn-success" onClick={handleLogin}>
              Submit
            </button>
            <Link to="/signup" className="m-3 mx-1 btn btn-danger">
              New User
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login