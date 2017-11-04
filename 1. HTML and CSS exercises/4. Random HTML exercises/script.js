var todos = ["Buy New Char"];

var input = prompt("What would you like to do?");

if(input === "list"){
console.log(todos);
}
else if(input === "new")
{
	var newTodo = prompt("Enter new todo ")
	todos.push(newTodo);
	console.log(todos);
}