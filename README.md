# People Directory

A simple page that uses JavaScript `fetch` to get users from JSONPlaceholder and show them in a profile-card grid.

## Run the page

Open `ph.html` through a local development server so the browser can load the page and make its API request. The directory uses the public endpoint `https://jsonplaceholder.typicode.com/users`.

## What the page includes

- A responsive grid of profile cards.
- Each card shows a user's name, username, email, company, and phone number.
- Icons and the card layout are written in HTML.
- A flat style with solid colors and borders, without shadows or gradients.

## How the JavaScript works

The card layout and its icons are written once in the HTML `<template>`. The JavaScript copies that template for each user and fills in the user's details.

### What each part does

- `getElementById()` finds the grid, the card template, and the status message in the HTML so JavaScript can use them.
- `fetch(url)` sends a request to the API. It returns a Promise, which represents a result that will arrive later.
- The first `.then()` runs when the response arrives. `response.json()` reads the response body and converts the JSON into JavaScript data.
- The next `.then((users) => { ... })` receives that data. `users` is an array containing the users returned by the API.
- `users.forEach((user) => { ... })` repeats the code inside its braces once for every item in the array. On each repeat, `user` refers to the current user's data.
- `document.createElement("article")` makes a new article element. Setting `card.className` gives it the `profile-card` CSS style.
- `profileTemplate.content.cloneNode(true)` makes a copy of the card layout from the HTML template. `true` means to copy all of its child elements too, including the icons.
- `profile.querySelector(".name")` finds an element inside the copied card by its CSS class. Setting its `textContent` puts the user's name there. The other `querySelector()` lines fill in the username, email, company, and phone in the same way.
- `card.appendChild(profile)` puts the copied card contents inside the new article. `peopleGrid.appendChild(card)` adds that finished article to the page.
- After all users have been added, `statusMessage.textContent = ""` clears the loading message.
- `.catch()` runs if the request or JSON reading fails. It shows an error message so the page does not stay on "Loading profiles...".
