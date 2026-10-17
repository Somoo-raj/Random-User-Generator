const btn = document.querySelector("#fetchBtn");
const card = document.querySelector("#user-card");
const userImg = document.querySelector("#userImg");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");

// 1. A function that will fetch data from the API
async function getUser() {
  try {
    btn.innerText = "Loading...";

    // API Call
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    // User data received from the API (the Randomuser API is somewhat nested)
    const user = data.results[0];

    // 2. DOM manipulation (displaying data on the screen)
    userImg.src = user.picture.large;
    userName.innerText = `${user.name.first} ${user.name.last}`;
    userEmail.innerText = user.email;

    // Show the card
    card.style.display = "block";
    btn.innerText = "Get Random User";
  } catch (error) {
    console.error("A mistake was made.:", error);
    btn.innerText = "Try Again";
  }
}

// 3. Event Listener
btn.addEventListener("click", getUser);
