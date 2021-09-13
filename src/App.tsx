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
          <ReactLink to="/User">
            <Tab>User</Tab>
          </ReactLink>
          <ReactLink to="/About">
            <Tab>About</Tab>
          </ReactLink>
        </TabList>
      </Tabs>
      <Switch>
        <Route path={["/about", "/profile"]}>
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
