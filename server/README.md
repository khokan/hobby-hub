# 📌 HobbyHub Backend API

The **HobbyHub Backend** is a Node.js + Express application that powers the **HobbyHub** platform.  
It connects to **MongoDB Atlas** and provides **RESTful APIs** for managing community-driven hobby groups.

---

## 🚀 Features

- 🔹 **Group Management API** – Create, Read, Update, and Delete hobby groups  
- 🔹 **MongoDB Atlas Integration** – Secure, cloud-hosted database  
- 🔹 **Express Server** – Fast and lightweight backend framework  
- 🔹 **CORS & JSON Support** – Enables smooth communication with the frontend  
- 🔹 **Environment Configurations** – Secure handling of sensitive data with `.env`  
- 🔹 **Serverless Deployment Ready** – Easily deployable on Vercel/Render/Netlify  

---

## 📦 Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB + MongoDB Atlas  
- **Utilities:** dotenv, CORS  
- **Deployment:** Vercel (serverless hosting)  

---

## 📁 Project Structure

```bash
project/
├── index.js       # Main server file
├── .env           # Environment variables (not committed to git)
├── package.json   # Project dependencies and scripts
└── README.md      # Documentation
```

---

## ⚡ API Endpoints

### Base URL
```
https://<your-deployment-url>/
```

### Routes

#### 1. Health Check  
```http
GET /
```
- ✅ Returns a simple message to confirm the server is running.

---

#### 2. Get All Groups  
```http
GET /groups
```
- ✅ Returns an array of all hobby groups.  

---

#### 3. Get Group by ID  
```http
GET /groups/:id
```
- ✅ Returns details of a single group by its **ID**.  

---

#### 4. Create a New Group  
```http
POST /groups
```
- ✅ Creates a new hobby group.  
- **Request Body Example:**
```json
{
  "name": "Book Lovers Club",
  "description": "A group for people who love reading",
  "location": "Dhaka, Bangladesh",
  "members": []
}
```

---

#### 5. Update a Group  
```http
PUT /groups/:id
```
- ✅ Updates an existing group by **ID**.  
- **Request Body Example:**
```json
{
  "name": "Updated Group Name",
  "description": "Updated group description"
}
```

---

#### 6. Delete a Group  
```http
DELETE /groups/:id
```
- ✅ Deletes a group by **ID**.  

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-atlas-uri>
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```
   Server runs on: [http://localhost:5000](http://localhost:5000)

---

## 🌐 Deployment

- This backend is optimized for **serverless deployment**.  
- Recommended platforms: **Vercel**, **Render**, or **Railway**.

---
