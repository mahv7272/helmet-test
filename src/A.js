import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function A() {
  const navigate = useNavigate();

  const clicked = () => {
    navigate("/b");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A-Title</title>
      </Helmet>
      component A<button onClick={clicked}>go to B</button>
      <p>test</p>
    </div>
  );
}
