import React from "react";

function Article(props) {
  const defaultDate = "January 1,1970";
  return (
    <article>
      <h3>{props.title}</h3>
      {!props.date ? <small>{defaultDate}</small> : <small>{props.date}</small>}
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;
