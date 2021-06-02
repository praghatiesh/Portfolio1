import React, { useState } from "react";
import "./App.css";
import pragaimg from "./praga.jpg"

export default function Portfolio() {
  const [url, seturl] = useState(null);
  const [page, setpage] = useState("home");
  const [content,setcontent] = useState("");
  return (
    <div>
      <div className="Nav" >
        <div className="name" onClick={() => setpage("home")}>
          PRAGHATIESH S
        </div>
        <div className="box" onClick={() => setpage("home")}>
          Home
        </div>
        <div className="box" onClick={() => {setpage("about")}}>
          About
        </div>
        <div className="box" onClick={() => setpage("project")}>
          Projects
        </div>
        <div className="box" onClick={() => setpage("skill")}>
          Skills
        </div>
      </div>
      <div style={{ display: page === "about" ? "block" : "none" }}>
      <div className="canva">
  <iframe className="iframe"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEdB7Bt7AU&#x2F;view?embed">
  </iframe>
</div>
</div>
      <div style={{ display: page === "project" ? "block" : "none" }}>
        <div
          style={{
            display: url != null ? "block" : "none",
            margin: " 10px 20px",
          }}
        >
          <iframe
            src={url}
            title="Dictionary"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            title="sandbox"
            className="iframe"
          ></iframe>
        </div>
        <div  style={{
            display:  content==="Kncet"? "block" : "none",
            margin: " 10px 20px",
          }}>
            <div className="Kncet">
              <div className="img1"></div>
              <div className="img2"></div>
              <div className="img3"></div>
            </div>
        </div>
        <h1 style={{textAlign:"center",marginmarginBottom:50}}>Projects</h1>
        <div className="Projects">
          <div
            className="projBox"
            onClick={() =>{seturl(null); setcontent("Kncet");}}
          >
            <h1 className="txth">KNCETians App</h1>
          </div>
          <div
            className="projBox"
            onClick={() =>{
              seturl(
                "https://codesandbox.io/embed/weather-jz74d?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
            setcontent("");
            }
            }
          >
            <h1 className="txth">Weather Monitor</h1>
          </div>
          <div className="projBox" onClick={() =>{
              seturl(
                "https://codesandbox.io/embed/dictionary-r6ze8?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
              setcontent("");
            }
            }>
            <h1 className="txth">Dictionary</h1>
          </div>

          <div
            className="projBox"
            onClick={() =>{
              seturl(
                "https://codesandbox.io/embed/todo-list-efj9g?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
              setcontent("");
            }
            }
          >
            <h1 className="txth">To-Do List</h1>
          </div>
          <div
            className="projBox"
            onClick={() =>{
              seturl(
                "https://codesandbox.io/embed/dictionary-dqw7e?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
              setcontent("");
            }
            }
          >
            <h1 className="txth">Mcq Test App</h1>
          </div>

          
        </div>
      </div>
      <div
        className="home"
        style={{ display: page === "home" ? "block" : "none" }}
      >
        <div style={{ display: "flex", flexDirection: "column" ,margin:65,justifyContent:"center",alignItems:"center"}}>
          <img className="dp" src={pragaimg} />
          <p className="text" style={{ fontSize: 25 }}>
            Hello , I am
          </p>
          <p className="nametext">PRAGHATIESH S</p>
          <p className="text">I am a Web developer</p>
          <div className="homebtn" onClick={() => setpage("project")}>
            See My Works
          </div>
        </div>
      </div>
      <div
        className="home"
        style={{ display: page === "skill" ? "block" : "none" }}
      >
        <h1 style={{textAlign:"center",marginBottom:50}}>Skills</h1>
        <div className="skill">
          <div className="skillbox">
            +Reactjs
          </div>
          <div className="skillbox">
            +javascript
          </div>
          <div className="skillbox">
            +HTML
          </div>
          <div className="skillbox">
            +CSS
          </div>
          <div className="skillbox">
            +Java
          </div>
          <div className="skillbox">
            +Mysql
          </div>
        </div>
      </div>
      <div class="links">
      <div >
        <h1 style={{textAlign:"center"}}>Contact</h1>
          <div style={{display:"flex",flexDirection:"row"}}>
            <a href="https://www.linkedin.com/in/praghatiesh/"><img className="icons" src="http://pngimg.com/uploads/linkedIn/small/linkedIn_PNG16.png" width="50px" height="50px"/></a>
           <a href="https://github.com/praghatiesh"><img className="icons" src="https://image.flaticon.com/icons/png/512/733/733553.png" width="50px" height="50px"/></a>
           <a href="mailto:praghatieshss@gmail.com"><img className="icons" src="https://image.flaticon.com/icons/png/512/893/893257.png" width="50px" height="55px"/></a>
          </div>
        </div>
        </div>
      </div>
  );
}
