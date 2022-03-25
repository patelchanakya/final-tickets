const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LastTicketNFT", function () {
  it("Should return the new greeting once it's changed", async function () {
    const LastTicketNFT = await ethers.getContractFactory("LastTicketNFT");
    const lastTicketNFT = await LastTicketNFT.deploy("Hello, world!");
    await lastTicketNFT.deployed();

    expect(await lastTicketNFT.greet()).to.equal("Hello, world!");

    const setGreetingTx = await lastTicketNFT.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await lastTicketNFT.greet()).to.equal("Hola, mundo!");
  });
});
