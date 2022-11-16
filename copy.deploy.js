async function main() {
  // Grab the contract factory 
  const NFT = await ethers.getContractFactory("TodoApp"); // W3bNFT

  console.log("Deployment started🔹🔹🔹, returning a promise that resolves to a contract object 🤞"); 

  // const root = '0x8890fdaaf3cdfcde0537857464fe9faac18a6d185dc1992ca2f2b809057def57';
  const wNFT = await NFT.deploy();  // 0x21fE7704f9Bb608d1b8673c3Fe78CFFC1B1C804a, 0xb04FF5C147405e883C47BE596dedA7682934c247
  console.log("🎉Contract deployed to address🎉", wNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
