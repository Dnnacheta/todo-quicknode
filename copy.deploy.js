async function main() {
  // Grab the contract factory 
  const Todo = await ethers.getContractFactory("TodoApp"); // Todo

  console.log("Deployment started🔹🔹🔹, returning a promise that resolves to a contract object 🤞"); 
  const todo = await Todo.deploy(); 
  console.log("🎉Contract deployed to address🎉", todo.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
