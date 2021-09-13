import React from "react";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router";

const About = (): JSX.Element => {
  const params: { aboutId: string } = useParams();
  return <Heading size="lg">About:{params.aboutId}</Heading>;
};

export default About;
