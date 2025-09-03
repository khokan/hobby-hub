# 📌 HobbyHub

**Assignment Category:** Assignment-10_category_Papaya  
**Live Link:** [HobbyHub](https://hobby-hub-khokon.vercel.app)

---

## 🌟 Project Theme

HobbyHub is a platform where people can discover and join local hobby-based groups (e.g., book clubs, hiking crews, painting circles) or create their own. It encourages social engagement through shared interests, helping people build communities around their passions.

---

## 📖 Project Overview

HobbyHub is a full-stack web application designed to connect individuals with shared interests and hobbies.  
The platform allows users to:

- Discover local hobby groups
- Create and manage their own groups
- Schedule events & RSVP
- Engage with like-minded people through discussions and interactions  

With features such as **event scheduling**, **interest-based matching**, and **social engagement tools**, HobbyHub fosters community building and enhances real-world social connections.

---

## ✨ Key Features

### Client (Frontend)
- **Local Hobby Discovery** – Browse and join hobby-based groups near you.  
- **Group Creation & Management** – Create and manage your own hobby groups with meeting times, locations, and roles.  
- **Interest-Based Matching** – Personalized group suggestions based on user hobbies.  
- **Event Scheduling & RSVP** – Organizers can schedule events; members can RSVP.  
- **Social Engagement Tools** – Messaging, photo sharing, and discussion boards.  

### Server (Backend)
- **REST API for Groups** – CRUD operations for user-created groups.  
- **MongoDB Atlas Integration** – Persistent database storage.  
- **CORS + JSON Support** – Optimized for cross-origin requests.  
- **Environment Variable Management** – Secure `.env` configuration.  
- **Serverless Ready** – Deployable on Vercel or similar platforms.  

---

## 🛠 Tech Stack

### Frontend
- React  
- Tailwind CSS + DaisyUI  
- React Router  
- Firebase (Auth & Hosting)  
- Lottie, Swiper, Lucide, React Icons  
- React Helmet Async  
- React Hot Toast, SweetAlert2  
- Date-fns, React Simple Typewriter  

### Backend
- Node.js  
- Express.js  
- MongoDB + MongoDB Atlas  
- dotenv  
- CORS  
- Vercel (for hosting)  

---

## 📁 Project Structure

```bash
HobbyHub/
├── client/         # React frontend
│   ├── public/
│   └── src/
│
├── server/         # Node.js backend
│   └── index.js
│
└── README.md       # Common project documentation
