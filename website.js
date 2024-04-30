
function addGoal() {
    let user = prompt("Please enter your goal:");
        if (user === null || user.trim() === "") {
        alert("Error: You did not enter the goal.")
        } else {
        alert("Success: Goal '" + user + "' is added.")
        }
}
function removeGoal() {
    let user = prompt("Please enter the full name of the goal you want to remove:", "");
        if (user === null || user.trim() === "") {
        alert("Error: You did not enter the goal.")
        } else {
        alert("Success: Goal '" + user + "' is removed.")
            }
        }