// Your code goes here
//querySelectors for html page
const computerResponse = document.querySelector("#computer-response");
const nameForm = document.querySelector("#name-form");
const userInput = document.querySelector("#user-input");
//queryselector for 2nd h2 element
const friendGreeting = document.querySelector("#friend-greeting");

//addEventListener for form variable
nameForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents for from refreshing use without action value
  const value = userInput.value;
  const enemiesArray = ["Joker", "Juggernaut", "Venom", "Dabura", "Frieza"];

  //params variable for new url search
  const params = new URLSearchParams(document.location.search);
  const friendName = params.get("name");

  //conditional statement for value
  if (enemiesArray.includes(value)) {
    computerResponse.textContent = "Go Away!";
  } else {
    //friendGreeting.textContent = "Hello" + friendName;
    //computerResponse.textContent = "Hello" + value;
    document.location = "./greeting.html?name=" + value;
  }
});
