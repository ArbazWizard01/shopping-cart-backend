
# Verto Shopping Cart Backend Service

This repository contains the RESTful API that powers the Verto Shopping Cart Frontend application. It is built using Node.js/Express and is structured to handle product data delivery and simulate the core business logic of a secure checkout process.

### Frontend Repo: https://github.com/ArbazWizard01/shopping-cart-frontend

## Key Backend Features

* **Product Data Service:** Exposes a static list of products for the frontend.
* **Checkout Logic Simulation:** Validates incoming cart data and calculates the order total to simulate a successful transaction.
* **Data Validation:** Ensures incoming checkout requests are correctly structured before processing.
* **Clean Architecture:** Uses a distinct Controller/Router pattern for clear separation of concerns.

## Tech Stack 🛠️

* **Node.js + Express** (JavaScript/TypeScript, if applicable)
* **Axios/Node-Fetch** (for any necessary external calls, if applicable)
* **In-Memory/JSON Data Source** (For simplified product catalog)

---

## Getting Started 

### Requirements

Requires **Node.js** and **npm** (or yarn).

### Installation and Running

Clone, install, and run the app in development:

```bash
# Clone the repository
git clone [repository-url] verto-shopping-cart.backend
cd verto-shopping-cart.backend

# Install dependencies
npm install

# Start the development server
npm run dev
````

The API will be available at the base URL: `http://localhost:8000`.

-----

## Frontend Reference :link:

This backend API is consumed by the Verto Shopping Cart Frontend application.

**Frontend Repository:** [Insert Frontend Repo URL Here]

## API Reference 

**Base URL:** `http://localhost:8000` (or the PORT set in environment)

### Get all products

Retrieves the static product catalog for display in the shop.

`GET /api/products`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| *(None)* | | |

**Success Response (200 OK):** Returns an array of product objects (e.g., `{ id, name, price, imageUrl }`).

### Simulate Checkout

Receives the client's cart items, validates the data, calculates the total price, and returns a transaction confirmation.

`POST /api/checkout`

**Body (json):**
The request body should contain the list of items the user is purchasing.

```json
{
	"items": [
		{ "id": "prod_123", "quantity": 1 },
		{ "id": "prod_456", "quantity": 2 }
	]
}
```

**Success Response (200 OK):**
Returns a confirmation message and the calculated final total.

```json
{
	"message": "Checkout processed successfully!",
	"total": 49.99
}
```

**Failure Response (400 Bad Request):**
Occurs if the `items` array is missing or empty, or if item quantities are invalid.

```json
{
	"error": "Invalid cart items provided."
}
```

-----

## Quick Summary 

| Component | Responsibility |
| :--- | :--- |
| **Entry** | `server.js` (or `src/index.js`) |
| **Product Router** | `src/routes/product.router.js` (mounted at `/api/products`) |
| **Checkout Router** | `src/routes/checkout.router.js` (mounted at `/api/checkout`) |
| **Product Controller** | `src/controllers/product.controller.js` |
| **Checkout Controller** | `src/controllers/checkout.controller.js` (Handles validation and total calculation) |
| **Data Source** | `src/data/products.json` (Static product catalog) |

## Scripts (from package.json)

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `ts-node-dev ...` or similar | Starts the development server with hot-reloading. |
| `npm start` | `node dist/index.js` | Runs the compiled production application. |
| `npm test` | `jest` or similar | Runs unit and integration tests (if included). |

```
```
