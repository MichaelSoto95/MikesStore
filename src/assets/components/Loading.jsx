import React from "react";

const style = {
  height: "100vh",
  color: "black",
  display: "grid",
  placeItems: "center",
  fontSize: "2rem",
};
const Loading = () => {
  return (
    <div style={style}>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
