import React from "react";

function About(props) {
  const imgSrc = "https://via.placeholder.com/215";
  return (
    <aside>
      {!props.image ? (
        <img src={imgSrc} alt="blog logo" />
      ) : (
        <img src={props.image} alt={props.image} />
      )}
    </aside>
  );
}

export default About;
