const peopleGrid = document.getElementById("people-grid");
const profileTemplate = document.getElementById("profile-template");
const statusMessage = document.getElementById("directory-status");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const card = document.createElement("article");
      card.className = "profile-card";
      const profile = profileTemplate.content.cloneNode(true);
      profile.querySelector(".name").textContent = user.name;
      profile.querySelector(".username").textContent = `@${user.username}`;
      profile.querySelector(".email").textContent = user.email;
      profile.querySelector(".company").textContent = user.company.name;
      profile.querySelector(".phone").textContent = user.phone;
      card.appendChild(profile);
      peopleGrid.appendChild(card);
    });

    statusMessage.textContent = "";
  })
  .catch((error) => {
    statusMessage.textContent = "Could not load profiles. Please try again.";
    console.log(error);
  });
