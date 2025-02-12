# Users List App

This is a simple React application that fetches user data from an API, displays it, and allows users to search for specific names.

## Features
- Fetches user data from an external API.
- Displays a list of users.
- Allows searching for users by name.
- Handles loading state.

## Tech Stack
- React.js
- Axios (for API requests)
- CSS (for styling)

## Project Structure
```
├── src
│   ├── components
│   │   ├── Users.js    # Fetches and displays user data
│   |
│   │   ├── users.css   # Styling for the Users component
│   ├── App.js          # Main application file
│   ├── index.js        # Entry point of the React app
├── public
├── package.json
└── README.md
```

## API Used
The application fetches data from the following API:
```
https://jsonplaceholder.typicode.com/users
```

## Usage
1. The user list is displayed upon loading the application.
2. Enter a name in the search box and click the **Search** button to filter users.
3. The filtered results will be displayed dynamically.

## Notes
- The application handles loading state while fetching data.
- Make sure you have an internet connection to fetch the data from the API.

