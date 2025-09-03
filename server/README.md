# HobbyHub Backend API

This is a Node.js + Express backend application for managing community groups in a project called **HobbyHub**. It connects to a MongoDB Atlas database and provides RESTful APIs for CRUD operations on user-created groups.

---

## 🚀 Features

- REST API for managing groups (create, read, update, delete)
- MongoDB Atlas database integration
- Express server with CORS and JSON support
- Environment variable support via `.env`
- Ready for serverless deployment (e.g. Vercel)

---

## 📦 Tech Stack

- Node.js
- Express
- MongoDB + MongoDB Atlas
- dotenv
- CORS
- Vercel (for serverless hosting)

---

## 📁 Project Structure

project/
│
├── index.js # Main server file
├── .env # Environment variables (not committed)
├── package.json
└── README.md

✅ API Endpoints
GET /
Returns a simple message to confirm the server is running.

GET /groups
Returns all groups.

GET /groups/:id
Returns a single group by ID.

POST /groups
Creates a new group.
Request body:

PUT /groups/:id
Updates an existing group by ID.

DELETE /groups/:id
Deletes a group by ID.
