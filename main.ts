import inquirer from "inquirer";

let todoList = [];

let conditions = true;

console.log("\n \tTODO List\n");

while(conditions){
let addTask = await inquirer.prompt([
    {
        name:"task",
        type:"input",
        message:"Enter your new task:"
    }
]);

todoList.push(addTask.task);
console.log(addTask.task, "Task added in Todo-List successfully");

let addMoreTast = await inquirer.prompt([
    {
        name:"addmore",
        type:"confirm",
        message:"Do you want to add more task ?",
        default: "False",
    }
]);

conditions = addMoreTast.addmore
}

console.log("Your updated Todo List:", todoList)
