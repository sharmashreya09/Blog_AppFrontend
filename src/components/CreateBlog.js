import React,{useState} from 'react'
import Header from './Header'
import { useAsyncError,useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const[title,setTitle]=useState("");
  const [Category, setCategory] = useState("JavaScript");
  const[content,setContent]=useState("");
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
           e.preventDefault();
           let auth=localStorage.getItem("Users");
           auth=JSON.parse(auth);
           let user_name=auth.name;
           let user_mail=auth.email;
           console.log({title,Category,content,user_name,user_mail});
          let result = await fetch("http://localhost:5050/postblog",{

                  method:"POST",
                  body:JSON.stringify({title,Category,content,user_name,user_mail}),
                  headers:{
                       "Content-Type":"application/json"
                  }

           });
           
            result = await result.json();
            if(result)
            {
              console.log(result);
              alert("Blog Uploaded");
              navigate("/create");
              
            }
           
  }
  return (
    <div
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_L3koAGKNJfIkoFLKZKDW09wkbcBfjQtOA&usqp=CAU")',
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
      <div class="container fm" style={{ padding: "15px" }}>
        <form action="" method="post">
          <img
            src="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
            alt="Wellness image"
            className="blogimg"
            style={{ height: "230px" }}
          />
          <div class=" form-row">
            <div class="form-group col-md-6">
              <label
                for="inputTitle"
                style={{ marginLeft: "10px", marginTop: "5px" }}
              >
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="inputTitle"
                placeholder=" Give a title to your Blog"
                name="title"
                style={{ width: "400px", margin: "10px" }}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label
                for="Categoryofblog"
                style={{ marginLeft: "10px", marginTop: "5px" }}
              >
                Select Category
              </label>
              <select
                class="form-control"
                id="Categoryofblog"
                name="Category"
                style={{ width: "400px", margin: "10px" }}
                onChange={(e)=>setCategory(e.target.value)}
              >
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Django">Django</option>
                <option value="BigDataAnalysis">Big Data Analysis</option>
                <option value="Machinelearning">Machine Learning</option>
                <option value="ReactJS">ReactJS</option>
                <option value="Java">Java</option>
                <option value="DSA">DataStructure & Algorithms</option>
                <option value="cpp">CPP</option>
                <option value="Sql">SQL</option>
                <option value="CP">Competitive Programming</option>
              </select>
            </div>
          </div>
          <div class=" form-row">
            <div class="form-group col-md-6">
              <label
                for="inputContent"
                style={{ marginLeft: "10px", marginTop: "5px" }}
              >
                Blog Content
              </label>
              <textarea
                class="form-control"
                id="inputContent"
                placeholder="Write the content of the blog here!!"
                name="content"
                style={{ width: "500px", margin: "10px", height: "140px" }}
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mx-2" onClick={handleSubmit}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog