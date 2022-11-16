// import { ethers } from "hardhat";
require('dotenv').config();
const ethers = require('ethers');

const url = process.env.QUICKNODE_HTTP_URL;
const GOERLI_API_KEY = process.env.GOERLI_API_KEY;
const provider = new ethers.providers.JsonRpcProvider(url);

const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider);

const contract = require("../artifacts/contracts/todo-app.sol/TodoApp.json");

const abi = contract.abi
const contractAddress = '0xbe478aedb52aec6d1545ecd6c322d8e5e39e9128'
const todo = new ethers.Contract(contractAddress, abi, signer);
// console.log(JSON.stringify(contract.abi));

//  console.log("🎉Contract deployed to address🎉", wNFT.address);

const getTask = async () => {
    let Txn = await todo.getTask(0)
    await Txn.wait()
    console.log(`view todo 👉https://goerli.etherscan.io/tx/${Txn.hash}`) 
}

getTask()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
