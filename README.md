README.md

📈 Stock Price Aggregation Web App

A responsive, real-time stock visualization dashboard built with React + Vite. This application fetches and displays stock prices and correlation data using an API, allowing users to analyze market trends interactively.

Table of Contents

    🧰 Tech Stack

    🚀 Features

    📁 Folder Structure

    🛠️ Installation & Setup

    💻 Running the App

    📸 Screenshots

    🧪 API Testing (Backend)

    📦 Production Practices

    📜 License

🧰 Tech Stack

Frontend

    React (via Vite)

    JavaScript or TypeScript (preferred)

    Material UI

    Axios

    Recharts

Backend (if required for additional questions)

    Express (Node.js) or any framework of your choice

    No external libraries for algorithms (e.g. for average or correlation)

🚀 Features

Frontend

    Stock Page (/stock):

        Select a stock

        Choose a time interval in minutes

        Interactive line chart with hover details

    Heatmap Page (/heatmap):

        Visual correlation matrix (Pearson coefficient)

        Hover to reveal average and standard deviation

        Color-coded correlation strength

    Responsive Design:

        Mobile-friendly UI

        Works across all screen sizes

Backend (if average calculator is required)

    REST API to compute average from array of numbers

    Accepts JSON payload

    Returns average and response time

📁 Folder Structure

.
├── public/
├── src/
│ ├── components/ # Reusable UI components (Navbar, Chart, Heatmap)
│ ├── pages/ # Page-level views (StockPage, HeatmapPage)
│ ├── utils/ # API functions and helpers
│ ├── App.jsx
│ └── main.jsx
├── screenshots/ # Desktop and mobile view screenshots
├── .gitignore
├── index.html
└── README.md

🛠️ Installation & Setup

Step 1: Clone the Repository

git clone https://github.com/your-username/stock-aggregator-app.git
cd stock-aggregator-app

Step 2: Install Dependencies

npm install

Step 3: Run Development Server

npm run dev

Visit: http://localhost:5173

💻 Running in Production

To build and preview for production:

npm run build
npm run preview

📸 Screenshots

screenshots/
├── stock-desktop.png # Desktop view of Stock Page
├── stock-mobile.png # Mobile view of Stock Page
├── heatmap-desktop.png # Desktop view of Heatmap Page
├── heatmap-mobile.png # Mobile view of Heatmap Page
├── api-request.png # Postman/Insomnia request screenshot
└── api-response.png # API response and timing screenshot

🧪 API Testing (Average Calculator)

For backend API (if required):

Endpoint: POST /api/average

Request Body:

{
"numbers": [10, 20, 30, 40]
}

Response:

{
"average": 25,
"responseTime": "14ms"
}

Use Postman or Insomnia to capture request and response screenshots with headers and status code.

📦 Production Practices Followed

    node_modules excluded via .gitignore

    Logical commit history

    Modular folder structure

    Responsive layout tested on mobile & desktop

    API calls optimized to reduce cost

    Comments included for algorithm and data logic

    Proper naming conventions and TypeScript support (if enabled)

📜 License

MIT License
