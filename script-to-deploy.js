const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const signer = provider.getSigner();

  const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your actual contract address
  const contractABI = [
    "function greet() public pure returns (string memory)",
  ]; 
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const greeting = await contract.greet();
  console.log("Greeting:", greeting);
}

main().catch((error) => {
  console.error("Error:", error);
});
