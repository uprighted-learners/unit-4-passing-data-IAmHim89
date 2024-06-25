// Your code goes here
//queryselector for 2nd h2 element
const friendGreeting = document.querySelector("#friend-greeting");

//params variable for new url search
const params = new URLSearchParams(document.location.search);
const friendName = params.get("name");

friendGreeting.textContent = "Hello" + " " + friendName + "!";
//computerResponse.textContent = "Hello" + value;
//document.location = "./greeting.html?name=" + value;
