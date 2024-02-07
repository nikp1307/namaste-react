import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h1 className="root" tabIndex="5">
    Heading using JSX Element!
  </h1>
);

// React Functional Component

const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    Heading using JSX!
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    <TitleComponent />
    <h1 className="heading">Heading using React Functional Component!</h1>
  </div>
);

const HeadingComponent2 = () => {
  return <h1>Heading using React Functional Component!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
