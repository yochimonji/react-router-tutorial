import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

const Home = (): JSX.Element => {
  const history = useHistory();

  const handleClick = () => {
    // history.block("このページを離れますか？");
    history.push("/about");
  };

  return (
    <>
      <Heading size="lg">Home</Heading>
      <Button onClick={handleClick}>Go about</Button>
    </>
  );
};

export default Home;
