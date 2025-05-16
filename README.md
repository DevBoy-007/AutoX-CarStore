# 🚗 AutoX Car Store

**AutoX Car Store** is a full-featured **MERN stack** web application for buying cars online. Customers can browse, add to cart, and purchase cars from top brands such as **Honda, Kia, Suzuki**, and more. Includes robust admin tools, secure authentication, and responsive design with animations.

---

## 📌 Features

| Feature                                 | Description                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------|
| 🔐 Authentication                     | Secure login/register system using JWT & HTTP-only cookies                 |
| 🛒 Brand-specific Carts               | Each car brand (Honda, Kia, etc.) has its own modular cart functionality   |
| 💳 Stripe Payments                    | Secure payment integration via Stripe                                      |
| 📦 Admin Panel                        | Add/update/delete cars, view all orders                                    |
| 🧾 Order System                       | Uses MongoDB `.populate()` for customer & car relations                    |
| 🌐 Responsive UI                      | Mobile-first UI with Framer Motion and AOS animations                      |

---

## 🛠️ Tech Stack

| Category       | Technologies                                      |
|----------------|---------------------------------------------------|
| **Frontend**   | React.js, Tailwind CSS, Axios, React Router       |
| **Backend**    | Node.js, Express.js                               |
| **Database**   | MongoDB, Mongoose                                 |
| **Auth & Pay** | JWT (cookies), Stripe                             |

---

## 📂 Project Structure
AutoX-CarStore/
│
├── client/ # React frontend
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── App.jsx
│

├── server/ # Express backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes
│ ├── controllers/
│ ├── middleware/
│ └── server.js
│
└── README.md

---

## ⚙️ 2. Setup Environment Variables
📁 /server/.env

PORT=3000
MONGODB_URI=mongodb://localhost:27017/CarStore
SECRET_KEY=yourSecretKey
STRIPE_SECRET_KEY=yourStripeSecretKey

📁 /client/.env

VITE_API_URL=http://localhost:3000

---

## 🌱 Future Improvements
Planned Feature	Description
| Feature                                 | Description                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------|
| 📊 Admin Dashboard                    |  Add charts for analytics                                                   |
| ☁️ Cloudinary Uploads                 | Upload car images with Cloudinary                                           |
| 📧 Email Confirmation                 | Send email confirmations and invoices                                       |
| 📱 Mobile PWA                        | Progressive Web App features for mobile support                              |


---

## 👨‍💻 Author
Hamza Qayyum |
MERN Stack Developer |
📫 LinkedIn https://www.linkedin.com/in/hamzaqayyum-/ |
📧 Dev.hamzaqayyum@gmail.com |










