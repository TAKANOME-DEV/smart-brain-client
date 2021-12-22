import React from "react";
import { Link } from "react-router-dom";
import { Card, Title, Content, Button } from "./styles/404.styled";

const NotFound = () => {
  return (
    <Card>
      <Title>404 - Page Not Found</Title>
      <Content>
        Sorry, we couldn't find what you were looking for or the page no longer
        exists.
      </Content>
      <Link to="/">
        <Button>Back To Homepage</Button>
      </Link>
    </Card>
  );
};

export default NotFound;
