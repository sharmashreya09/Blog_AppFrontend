
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import CategoryBlog from './components/CategoryBlog';
import CreateBlog from './components/CreateBlog';
import Blog from './components/Blog';
import Profile from './components/Profile';
import PersonalDetais from './components/PersonalDetais';
import UpdateInfo from './components/UpdateInfo';


function App() {
  const[title,setTitle]=useState("");
  const[category,setCategory]=useState("");
  const[username,setUserName]=useState("");
  const[content,setContent]=useState("");
  const sentBlog = (title, Category, user_name, content) => {
    console.log({title,Category,user_name,content});
    setTitle(title);
    setCategory(Category);
    setUserName(user_name);
    setContent(content);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/create" element={<CategoryBlog />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/javascript" element={<Blog category={"JavaScript"}  />}/>
          <Route path="/python" element={<Blog category={"Python"} />}/>
          <Route path="/Django" element={<Blog category={"Django"} />}/>
          <Route path="/BigDataAnalysis"element={<Blog category={"BigDataAnalysis"} />}/>
          <Route path="/MachineLearning" element={<Blog category={"Machinelearning"} />}/>
          <Route path="/ReactJS"element={<Blog category={"ReactJS"}  />}/>
          <Route path="/Java"element={<Blog category={"Java"}  />}/>
          <Route path="/DSA" element={<Blog category={"DSA"} />}/>
          <Route path="/CPP" element={<Blog category={"cpp"} />}/>
          <Route path="/Sql" element={<Blog category={"Sql"}  />}/>
          <Route path="/CP" element={<Blog category={"CP"} sentBlog={sentBlog} />}/>
          <Route path="/readblog"/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/addprofile" element={<PersonalDetais/>}/>
          <Route path="/updateprofile" element={<UpdateInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
