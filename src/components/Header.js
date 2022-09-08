import React from "react";

const Header = (props) => {
  return (
    <nav>
      <div className="header">
        <h1
          style={{
            color:
              props.mode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          }}
        >
          Where in the world?
        </h1>
        <h5
          style={{
            color:
              props.mode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          }}
          onClick={props.toggleMode}
        >
          <i className="fa-regular fa-moon"></i>
          {props.mode === "light" ? "Dark Mode" : "Light Mode"}
        </h5>
      </div>
    </nav>
  );
};

export default Header;
