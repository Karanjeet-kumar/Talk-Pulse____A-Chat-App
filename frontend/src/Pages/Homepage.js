import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SinUp from "../components/Authentication/SignUp";
import SignUp from "../components/Authentication/SignUp";

function Homepage() {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        p={2}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"3xl"} fontWeight={"1000"} fontFamily={"Work sans"}>
          Talk - Pulse
        </Text>
      </Box>
      <Box
        p={4}
        bg={"white"}
        w={"100%"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
