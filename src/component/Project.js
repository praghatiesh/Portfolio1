import React ,{useState}from "react"
export default function Project(){
    const [url, seturl] = useState(null);
    const [content, setcontent] = useState("");
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return(
        <div >
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
        <div
          style={{
            display: content === "Kncet" ? "block" : "none",
            margin: " 10px 20px",
          }}
        >
          <div className="Kncet">
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
          </div>
        </div>
        <h1 style={{ textAlign: "center", marginmarginBottom: 50 }}>
          Projects
        </h1>
        <div className="Projects">
          <div
            className="projBox"
            onClick={() => {
              scrollToTop();
              seturl(null);
              setcontent("Kncet");
            }}
          >
            <h1 className="txth">KNCETians App</h1>
          </div>
          <div
            className="projBox"
            onClick={() => {
              scrollToTop();
              seturl(
                "https://codesandbox.io/embed/weather-jz74d?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
              setcontent("");
            }}
          >
            <h1 className="txth">Weather Monitor</h1>
          </div>
          <div
            className="projBox"
            onClick={() => {
              scrollToTop();
              seturl(
                "https://codesandbox.io/embed/dictionary-r6ze8?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
              setcontent("");
            }}
          >
            <h1 className="txth">Dictionary</h1>
          </div>

          <div
            className="projBox"
            onClick={() => {
              scrollToTop();
              seturl(
                "https://codesandbox.io/embed/todo-list-efj9g?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
              setcontent("");
            }}
          >
            <h1 className="txth">To-Do List</h1>
          </div>
          <div
            className="projBox"
            onClick={() => {
              scrollToTop();
              seturl(
                "https://codesandbox.io/embed/dictionary-dqw7e?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              );
              setcontent("");
            }}
          >
            <h1 className="txth">Mcq Test App</h1>
          </div>
        </div>
      </div>
    )
}