Digital Signage Content Management System

Setup Instructions

1. Clone the Repository

Clone the repository to your local machine using the following command:

git clone <repository-url>

2. Web Dashboard

Navigate to the signage-dashboard directory:

cd signage-dashboard

Install dependencies:

npm install

Start the development server:

npm start

3. Electron App

Navigate to the signage-electron directory:

cd signage-electron

Install dependencies:

npm install

Launch the Electron app:

npm start

4. Web Server

Navigate to the websocket-server directory:

cd websocket-server

Install dependencies:

npm install

Launch the server:

node server.js

Architecture Overview

WebSocket: Enables real-time updates between the dashboard and the Electron app.

Fabric.js: Facilitates content creation and editing.

WebSocket Implementation

The WebSocket server listens for content changes and broadcasts updates to connected Electron apps. This ensures that all devices display the latest content seamlessly.
