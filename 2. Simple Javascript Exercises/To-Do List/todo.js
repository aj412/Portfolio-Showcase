
todos = ["rusty"];
var input =prompt("What would you like to do?");
while(input !=="quit"){
if(input == "list"){
console.log(todos);
}
if(input == "new"){
var newtodo = prompt("Enter new Todo");
todos.push(newtodo);

}
  input =prompt("What would you like to do?");

}
	console.log("Ok, you quit the app!");
