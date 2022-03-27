import React from "react";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import lastTicketNFT from "../LastTicketNFT.json";
import { Box, Button, Flex, Input, Text, Spacer } from "@chakra-ui/react";

const lastTicketNFTAddress = "0x04026698f77d0a3660aCa74Be614C65a08788FFC";

function trythis() {
  document.getElementById("valid").style.color = "red";
  document.getElementById("valid").style.textDecoration = "underline";
  document.getElementById("valid").style.textDecorationStyle = "double";
  document.getElementById("valid").style.textDecorationColor = "yellow";
}

const MainPageMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        lastTicketNFTAddress,
        lastTicketNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("found mint", response);
      } catch (err) {
        console.log("not found: ", err);
      }
    }
  }

  const handleDecrement = () => {
    // when we click minus button on mint
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleImcrement = () => {
    // max mint amount is 4
    if (mintAmount >= 4) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex
      justify="center"
      align="center"
      height="40vh"
      paddingBottom="15vh"
      paddingTop="25vh"
    >
      <Box width="920px" height="40vh">
        {isConnected ? (
          <div>
            <Flex
              align="center"
              justify="center"
              height="10vh"
              paddingRight="80px"
              paddingBottom="150px"
            >
              <Button
                variant="link"
                backgroundColor="transparent"
                fontSize="100px"
                color="antiquewhite"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                border="hidden"
                _hover={{ bg: "transparent", outline: "hidden" }}
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="95px"
                fontSize="100px"
                textAlign="center"
                border="none"
                type="number"
                value={mintAmount}
              />
              <Button // borderRadius="5px"
                variant="link"
                backgroundColor="transparent"
                // boxShadow="0px 2px 2px 1px #0F0F0F"
                border="hidden"
                _hover={{ bg: "transparent", outline: "hidden" }}
                color="antiquewhite"
                cursor="pointer"
                fontSize="100px"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={handleImcrement}
              >
                +
              </Button>
            </Flex>
          </div>
        ) : (
          <Spacer>
            <Flex align="center" justify="center" height="100px" color="black">
              <Text fontSize="xl" onClick={trythis}>
                <strong>Please find yourself first.</strong>
              </Text>
            </Flex>
          </Spacer>
        )}

        {mintAmount > 1 ? (
          <Flex align="center" justify="center">
            <Button onClick={handleMint} colorScheme="transparent">
              <Text color="red" fontWeight="black">
                CLAIM MY LAST TICKETS
              </Text>
            </Button>
          </Flex>
        ) : (
          isConnected && (
            <Flex align="center" justify="center">
              <Button colorScheme="red" variant="solid" onClick={handleMint}>
                <Text>CLAIM MY LAST TICKET</Text>
              </Button>
            </Flex>
          )
        )}
        <Flex align="center" justify="center" height="200px">
          <Spacer />
          <Text fontSize="30px" fontWeight="black" letterSpacing="-5.5%">
            Claim the last tickets before its too late. Wishing everyone well.
            Hope you make it.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainPageMint;
