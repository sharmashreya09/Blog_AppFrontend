import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';

const UpdateInfo = () => {
  const[array,setArray]=useState([])
    const [occupation, setOccupation] = useState("");
    const [skills, setSkills] = useState("");
    const [dob, setDob] = useState("");
    const [country, setCountry] = useState("");
    const [instalink, setInstaLink] = useState("");
    const [linkedin, setLinkedIn] = useState("");
    const [twitterlink, setTwitterLink] = useState("");
    const[email,setEmail]=useState("")
    const navigate=useNavigate();
    useEffect(()=>{
           fetchData();
    })
    const fetchData=async()=>{
         let auth = localStorage.getItem("Users");
         auth = JSON.parse(auth);
         let user_mail=auth.email;
        let response = await fetch(`http://localhost:5050/personalinfo/${user_mail}`);
        response = await response.json();
         setArray(response);
         const occ = array.map((item) => item.Occupation);
         setOccupation(occ);
         const ski = array.map((item) => item.Skills);
         setSkills(ski[0]);
         const dob = array.map((item) => item.DOB);
         setDob(dob);
         const loc= array.map((item) => item.Country);
         setCountry(loc);
         const insta = array.map((item) => item.Instagram);
         setInstaLink(insta);
         const linkin = array.map((item) => item.Linkedin);
         setLinkedIn(linkin);
         const twitter = array.map((item) => item.TwitterProfile);
         setTwitterLink(twitter);
        const mail= array.map((item) => item.user_email);
        setEmail(mail);
        
    }
    const updateData= async(e)=>{
               e.preventDefault();
               let result = await fetch(
                 `http://localhost:5050/updateinfo/${email}`,
                 {
                   method: "Put",
                   body: JSON.stringify({occupation,skills,dob,country,instalink,linkedin,twitterlink}),
                   headers: {
                     "Content-Type": "Application/json",
                   },
                 }
               );
               result = result.json();
               console.log(result);
               if (result) {
                 navigate("/profile");
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
          <button className="m-3 btn btn-success" onClick={updateData}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateInfo