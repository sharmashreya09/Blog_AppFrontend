import React ,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom';

const Signup = () => {
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const navigate=useNavigate();
    const submitdata=async(e)=>{
        e.preventDefault();
        console.log({name,email,username,password,confirmpassword});
        let result = await fetch("http://localhost:5050/register", {
          method: "POST",
          body: JSON.stringify({ name, email, username, password }),
          headers: {
            "Content-Type": "application/json",
          }
        });

        result= await result.json();
        console.log(result);
        if(result)
        {
            navigate("/login");
        }

    }
  return (
    <div
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEyG3wWx2ZIDV3U4p1LqH8hhMdZGpIhOwzbLb-ORrFrqQNKmobBkimj3AxXvBvq4rQAA&usqp=CAU")',
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div></div>

      <div className="container">
        <div
          style={{
            textAlign: "center",
            padding: "5px",
            textDecoration: "underline",
          }}
        >
          <h3>Register User </h3>
        </div>
        <form className="w-50 m-auto mt-5 border bg-dark border-success rounded">
          <div className="m-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="student_teacher_id" className="form-label">
              UserName
            </label>
            <fieldset>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter a unique username"
                aria-describedby="emailHelp"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <button className="m-3 btn btn-success" onClick={submitdata}>
            Submit
          </button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup