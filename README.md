# Smart Products Dashboard

A modern React-based dashboard application that displays products using a public REST API.  
The project demonstrates core React concepts such as component-based architecture, API integration, routing, and state management.

---

## 🚀 Features

- Fetches product data from a public REST API
- Displays products in a responsive card-based layout
- Search products by title
- Product details page using dynamic routing
- Loading state handling for better user experience
- Clean and reusable component structure

---

## 🛠 Tech Stack

- **React** (with Vite)
- **JavaScript (ES6+)**
- **Axios** (API requests)
- **React Router DOM**
- **CSS**

---

## 🌐 API Used

- Fake Store API  
  https://fakestoreapi.com/products

---

## 📂 Project Structure

```txt
src/
├── components/
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   └── Loader.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   └── ProductDetails.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
