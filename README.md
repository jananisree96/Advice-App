# Advice App

The **Advice App** is a simple React-based application that fetches random pieces of advice from the [Advice Slip API](https://api.adviceslip.com/) and displays them to the user. It allows users to generate new advice with the click of a button and keeps track of how many pieces of advice they have read.

## Features

- **Random Advice Generation**: Fetches a new piece of advice from the API every time the button is clicked.
- **Advice Counter**: Keeps a count of how many pieces of advice the user has read.
- **Dynamic UI Updates**: React state ensures the displayed advice and count update in real-time.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the application.
- **Advice Slip API**: To fetch random pieces of advice.

## How It Works

1. **Initial Load**: On the initial render, a random piece of advice is fetched and displayed.
2. **User Interaction**: When the user clicks the "Get Advice" button:
   - A new piece of advice is fetched from the API.
   - The counter increments to reflect the total number of pieces of advice read.


