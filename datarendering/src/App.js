import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import Posts from "./Components/Pages/Posts";
import Navbar from "./Components/Pages/Navbar";
import './Styles/styles.scss'
import Footer from "./Components/Pages/Footer";
import PostsId from "./Components/Pages/PostsId";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact-us" element={<Contact/>}/>
        <Route path="about-us" element={<About/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="posts" element={<Posts/>}/>
        <Route path="posts/:userId" element={<PostsId/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
