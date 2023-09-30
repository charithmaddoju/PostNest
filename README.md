# PostNest

PostNest is a web application that allows users to create, view, and like posts. Users can log in using their Google accounts, create posts, and interact with other users' posts through likes.

## Features

- **Google Authentication**: Users can authenticate using their Google accounts.
- **View Posts**: Authenticated users can view posts created by other users.
- **Create Posts**: Authenticated users have access to a `/create` route to create and submit their posts.
- **Like Functionality**: Users can like posts, providing a way to interact with the content.

## Technologies Used

- Firebase: Used for authentication and real-time database storage.
- HTML, CSS, JavaScript: Frontend development.
- Firebase Authentication: Used for user authentication.
- Firebase Realtime Database: Used for storing posts and user information.

## Getting Started

1. Clone the repository.
2. Set up Firebase:
   - Create a Firebase project in the Firebase Console (https://console.firebase.google.com/).
   - Set up Firebase Authentication and enable Google authentication.
   - Set up Firebase Realtime Database.
   - Update the Firebase configuration in your application.
3. Run the application locally or deploy it to a hosting service.

## Usage

1. Access the application and log in using your Google account.
2. View posts on the main page.
3. Navigate to the `/create` route to create a new post.
4. Interact with posts by liking them.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
