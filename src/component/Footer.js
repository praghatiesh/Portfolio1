import React from "react"
export default function Footer(){
    return(
        <>
        <div class="links">
        <div>
          <h1 style={{ textAlign: "center" }}>Contact</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a href="https://www.linkedin.com/in/praghatiesh/">
              <img
                className="icons"
                src="http://pngimg.com/uploads/linkedIn/small/linkedIn_PNG16.png"
                width="50px"
                height="50px"
              />
            </a>
            <a href="https://github.com/praghatiesh">
              <img
                className="icons"
                src="https://image.flaticon.com/icons/png/512/733/733553.png"
                width="50px"
                height="50px"
              />
            </a>
            <a href="mailto:praghatieshss@gmail.com">
              <img
                className="icons"
                src="https://pngimg.com/uploads/email/email_PNG20.png"
                width="50px"
                height="55px"
              />
            </a>
          </div>
        </div>
      </div>
        </>
    )
}
