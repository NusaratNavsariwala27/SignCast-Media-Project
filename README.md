# Digital Signage Content Management System

## Setup Instructions

1. Clone the repository.
2. For the React Dashboard:
   - Navigate to `signage-dashboard` and run:
     ```bash
     npm install
     npm start
     ```
   - The app will be hosted at `http://localhost:3000`.

3. For the Electron Display App:
   - Navigate to `signage-electron` and run:
     ```bash
     npm install
     npm start
     ```
   - The Electron app will open and display content in fullscreen.

4. Start the WebSocket Server:
   - Navigate to `websocket-server` and run:
     ```bash
     node index.js
     ```

## Architecture Overview
- React App (Dashboard) handles content creation and management.
- Electron App (Display) displays the content in fullscreen.
- WebSocket server enables real-time communication between the two.

## WebSocket Implementation
- React Dashboard sends content updates via WebSocket.
- Electron Display app listens for content updates via WebSocket and updates the display.

## Known Limitations
- Currently only supports basic text and image content.

## Future Improvements
- Add support for more media types (video, audio).
- Enhance UI/UX for a smoother experience.

