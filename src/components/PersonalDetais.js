import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const PersonalDetais = () => {
    const[occupation,setOccupation]=useState("");
    const[skills,setSkills]=useState("");
    const[dob,setDob]=useState("");
    const[country,setCountry]=useState("");
    const[instalink,setInstaLink]=useState("");
    const[linkedin,setLinkedIn]=useState("");
    const[twitterlink,setTwitterLink]=useState("");
    const navigate=useNavigate();

    const sendData=async(e)=>{
           e.preventDefault();
            let auth = localStorage.getItem("Users");
            auth = JSON.parse(auth);
            let user_email = auth.email;
           console.log({occupation,skills,dob,country,instalink,linkedin,twitterlink});
           let result = await fetch("http://localhost:5050/personalData", {
             method: "POST",
             body: JSON.stringify({
               occupation,
               skills,
               dob,
               country,
               instalink,
               linkedin,
               twitterlink,
               user_email,
             }),
             headers: {
               "Content-Type": "application/json",
             },
           });
           result=await result.json();
            console.log(result);
           if(result)
           {
            alert("info Added");
            navigate("/profile")
           }
          
    }


  return (
    <div
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2015/05/04/20/03/purple-wallpaper-752886_1280.jpg")',
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div></div>

      <div className="container">
        <form className="w-50 m-auto mt-5 border bg-dark border-success rounded">
          <div className="m-3">
            <label htmlFor="name" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              className="form-control"
              name="occupation"
              placeholder="Enter your Occupation"
              aria-describedby="emailHelp"
              value={occupation}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">
              Skills
            </label>
            <input
              type="text"
              className="form-control"
              name="skills"
              aria-describedby="emailHelp"
              placeholder="Enter your skills"
              value={skills}
              onChange={(e) => {
                setSkills(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="student_teacher_id" className="form-label">
              Date of Birth
            </label>
            <fieldset>
              <input
                type="date"
                className="form-control"
                name="dob"
                placeholder="Enter your DOB"
                aria-describedby="emailHelp"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Instagram Profile Link
            </label>
            <input
              type="url"
              className="form-control"
              name="instalink"
              value={instalink}
              onChange={(e) => {
                setInstaLink(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Linkedin Profile Link
            </label>
            <input
              type="url"
              className="form-control"
              name="linkedin"
              value={linkedin}
              onChange={(e) => {
                setLinkedIn(e.target.value);
              }}
            />
          </div>

          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Twitter Profile Link
            </label>
            <input
              type="url"
              className="form-control"
              name="twitterlink"
              value={twitterlink}
              onChange={(e) => {
                setTwitterLink(e.target.value);
              }}
            />
          </div>
          <button className="m-3 btn btn-success" onClick={sendData}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetais