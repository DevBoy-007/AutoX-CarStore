🚗 AutoX Car Store
A full-featured MERN stack web application for buying cars online. Built with modern web technologies, this platform allows customers to browse, add to cart, and purchase cars from various brands, including Honda, Kia, Suzuki, and more.

📌 Features
🔐 User Authentication (JWT + Cookies)

🛒 Add to Cart functionality per brand

💳 Stripe Payment Integration

🧾 Dynamic Orders with customer details

📦 Admin Panel for managing cars & orders

🌐 Responsive UI with animations (Framer Motion, AOS)

📊 MongoDB relationships using populate()

🛠️ Tech Stack
Frontend	Backend	Database	Auth & Payments
React.js, Tailwind CSS, Axios, React Router	Node.js, Express.js	MongoDB (Mongoose)	JWT, Stripe

📂 Project Structure
AutoX-CarStore/
│
├── client/              # React frontend
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── App.jsx
│
├── server/              # Express backend
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routes
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md
🚀 Getting Started
Prerequisites
Node.js & npm

MongoDB (local or Atlas)

Stripe Account

1. Clone the Repository
git clone https://github.com/yourusername/AutoX-CarStore.git
cd AutoX-CarStore
2. Setup Environment Variables
Create .env files in both /client and /server with the following:
📁 /server/.env
env
Copy
Edit
PORT=3000
MONGODB_URI=mongodb://localhost:27017/CarStore
SECRET_KEY=yourSecretKey
STRIPE_SECRET_KEY=yourStripeSecret
📁 /client/.env
VITE_API_URL=http://localhost:3000
3. Install Dependencies
Backend
bash
Copy
Edit
cd server
npm install
Frontend
cd ../client
npm install
4. Run the App
# Run both client and server with concurrently
npm run dev
✅ Features in Detail
User Login/Register — Stores JWT in HTTP-only cookies.

Brand-Specific Cars — Modular components for Honda, Suzuki, Kia, etc.

Cart Management — Add/Delete car entries per brand.

Stripe Checkout — Secure payment flow.

Admin Routes — Add, update, or delete car listings.

Order Management — View customer orders via MongoDB populate.

🧪 Future Improvements
Admin Dashboard with Charts

Image Upload via Cloudinary

Email Confirmation & Invoices

Mobile-First PWA Support

🙌 Acknowledgments
Stripe API for seamless payments

MongoDB & Mongoose for flexible data models

Framer Motion & AOS for animations

👨‍💻 Author
Hamza Qayyum
MERN Stack Developer
📫 LinkedIn : https://www.linkedin.com/in/hamzaqayyum-/
📧 Email: Dev.hamzaqayyum@gmail.com

📄 License
This project is open source and available under the MIT License.

