import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../styles/404.styled";

const NotFound = () => {
  return (
    <Card>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>
          Sorry, we couldn't find what you were looking for or the page no
          longer exists.
        </p>
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    </Card>
  );
};

export default NotFound;
