import React from "react";
import { Helmet } from "react-helmet";

export default function B() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>B-Title</title>
        <body class="dark" />

      </Helmet>
      component B
    </div>
  );
}
