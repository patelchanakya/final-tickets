import React from "react";
import { Box, Button, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import Gmail from "../priv/icons8-gmail.png";
import Twitter from "../priv/icons8-twitter.gif";

const MainPageNav = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  // open email client on click

  return (
    <Flex justify="space-between" align="center" padding="30px">
      <Flex justify="space-between" align="center" padding="0px 75px">
        <Link href="https://www.twitter.com/chanakyeah">
          <Image src={Twitter} boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.gmail.com">
          <Image src={Gmail} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>

      <Link
        href="https://www.chanak.xyz"
        isExternal
        _hover={{ bg: "red", outline: "hidden" }}
      >
        <Text fontSize="xl" fontWeight="black" color="yellow">
          <strong>join the Experience</strong>
        </Text>
      </Link>

      <Flex justify="space-around" align="center" width="40%" padding="30px">
        <Box margin="0 15px">
          <Text fontSize="xl">
            <strong>About</strong>
          </Text>
        </Box>
        <Spacer />
        <Box margin="0 15px">
          <Text fontSize="xl">
            <strong>Mint</strong>
          </Text>
        </Box>
        <Spacer />
        <Box margin="0 15px">
          <Text fontSize="xl">
            <strong>Team</strong>
          </Text>
        </Box>
        <Spacer />

        {isConnected ? (
          <Box margin="0 15px">
            <Text color="antiquewhite" fontSize="md">
              wallet found
            </Text>
          </Box>
        ) : (
          <Button
            variant="link"
            // borderRadius="5px"
            backgroundColor="transparent"
            // boxShadow="0px 2px 2px 1px #0F0F0F"
            color="antiquewhite"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            fontSize="lg"
            onClick={connectAccount}
            id="valid"
          >
            validate identity
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default MainPageNav;
