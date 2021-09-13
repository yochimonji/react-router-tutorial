import * as React from "react";
import {
  ChakraProvider,
  theme,
  Box,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link as ReactLink,
} from "react-router-dom";
import { About, Users, Home } from "./components";

const to = {
  pathname: "/users",
  search: "?class=A",
  hash: "#user-hash",
  state: { test: "test-state" },
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box w="100" h="16" bg="red.200">
      Header
    </Box>
    <BrowserRouter>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <ReactLink to="/">
            <Tab>Home</Tab>
          </ReactLink>
          <ReactLink to={to}>
            <Tab>Users</Tab>
          </ReactLink>
          <ReactLink to="/About/1">
            <Tab>About</Tab>
          </ReactLink>
        </TabList>
      </Tabs>
      <Switch>
        <Route path={["/about/:aboutId", "/profile"]}>
          <About />
        </Route>
        <Route path="/users">
          <Users
            pathname={to.pathname}
            search={to.search}
            hash={to.hash}
            state={to.state}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
