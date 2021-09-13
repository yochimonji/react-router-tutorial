import React from "react";
import { Heading, Stack, HStack, Box } from "@chakra-ui/react";

type UsersProps = {
  pathname: string;
  search: string;
  hash: string;
  state: object;
};

const Users = (props: UsersProps): JSX.Element => {
  return (
    <>
      <Heading size="lg">Users</Heading>
      <Stack>
        <HStack>
          <Box>{`pathname: ${props.pathname}`}</Box>
          <Box>{`search: ${props.search}`}</Box>
        </HStack>
        <HStack>
          <Box>{`hash: ${props.hash}`}</Box>
          <Box>{`state: ${props.state}`}</Box>
        </HStack>
      </Stack>
    </>
  );
};

export default Users;
