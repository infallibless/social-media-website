
# 📱 Social Media Platform

Welcome to the **Social Media Platform** project! This application allows users to connect, share content, and interact in a dynamic social space.

## 📸 Screenshots

![Page](https://imgur.com/39EhVUG)

![Page](https://imgur.com/seUIDAu)

![Page](https://imgur.com/ELWhUDK)

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Sign up, log in, and password recovery options.
- **Profile Customization**: Edit your bio, upload a profile picture, and more.
- **Post Sharing**: Share text posts, images, and links with other users.
- **Real-time Notifications**: Stay updated with live notifications.
- **Direct Messaging**: Private chats with other users.
- **Commenting and Liking**: Engage with posts through comments and likes.
- **Search**: Find users and posts with a powerful search feature.

## 🛠️ Technologies

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Real-time**: WebSocket, Socket.IO
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Docker, AWS

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/infallibless/social-media-website.git
   cd your-social-media-project
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following keys:
     ```plaintext
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     ```

4. Start the server and client:
   ```bash
   # In the root directory
   npm run dev
   ```

5. Access the app in your browser at `http://localhost:3000`.

## 🧑‍💻 Usage

After installing and running the app, you can:
1. Sign up and log in to create an account.
2. Edit your profile to add personal details.
3. Connect with other users, create posts, and leave comments.
4. Explore trending topics through the search and discover features.

## 🤝 Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes.
4. Commit and push:
   ```bash
   git commit -m "Add your message"
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## 📜 Copyright

© 2024 raynex. All rights reserved.

All files in this repository, unless otherwise noted, are released under the MIT License. By using, distributing, or modifying this code, you acknowledge the copyright holder's rights and agree to retain this copyright notice in any redistribution.
