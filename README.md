# Airbean API - Grupp 5

Welcome to the Airbean API project! This is a project involving creating a backend API for the Airbean web application, where users can order coffee and have it delivered via drone.

## Table of Contents
-   [Features](#features)
-   [Installation](#installation)
-   [API Endpoints](#api-endpoints)
-   [Technologies Used](#technologies-used)
-   [Authors](#authors)

## Features

-   **User Authentication:** Sign up, log in, and manage user profiles.
-   **Coffee Menu Management:** View and manage the coffee menu.
-   **Order Processing:** Place and manage coffee orders.
-   **Order Tracking:** Track the status of coffee orders.


## Installation
To set up the project locally, follow these steps:

1.  **Clone the repository:**

	` git clone http://github.com/LucasDaSilva96/Airbean-API.git`
	`cd airbean-api`

2.  **Install dependencies:**
    
    `npm install` 
    
3.  **Set up environment variables:** Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection string, JWT secret).
    
4.  **Start the server:**
    
    `npm run dev` 
    
The server should now be running on `http://localhost:8000`.

## How to Use

1. **Log in**
   - **Description:** There is already a user created.
   - **Method:** POST
   - **API Endpoint:** `http://localhost:8000/api/users/login`
   - **Instructions:**
     - Click the "Body" tab.
     - Select "raw" and "JSON".
     - Add the following credentials:
       ```json
       {
         "email": "philipalgebrink.pa@gmail.com",
         "password": "15235"
       }
       ```
     - Save the token generated.

2. **View Menu**
   - **Method:** GET
   - **API Endpoint:** `http://localhost:8000/api/menu`
   - **Instructions:**
     - Access the API using the provided URL.
     - Save the IDs of items if you plan to update or delete them in the future.

3. **Update Menu Item**
   - **Method:** PUT
   - **API Endpoint:** `http://localhost:8000/api/menu/:id`
   - **Request Body:**
     ```json
     {
       "title": "Updated Item Title",
       "description": "Updated Item Description",
       "price": 15.99,
       "image": "http://example.com/updated_image.jpg"
     }
     ```
   - **Note:** Replace `:id` with the ID of the item you want to update.

4. **Delete Menu Item**
   - **Method:** DELETE
   - **API Endpoint:** `http://localhost:8000/api/menu/:id`
   - **Note:** Replace `:id` with the ID of the item you want to delete.

5. **Create Promotional Offer**
   - **Method:** POST
   - **API Endpoint:** `http://localhost:8000/api/promotions`
   - **Request Body:**
     ```json
     {
       "products": ["Product 1", "Product 2"],
       "price": 40.00
     }
     ```
   - **Note:** Ensure that the products listed in the offer actually exist in the menu.

    
The server should now be running on `http://localhost:8000`.


## API-ENDPOINTS:

  
- **Create account:** http://localhost:8000/api/signUp (POST)

- **Log in:** http://localhost:8000/api/logIn (POST)
There is already a user made in the database that has admin role.
Email: test@gmail.com
Password: 15235

- **See Menu:** http://localhost:8000/api/menu (GET)

- **Create Menu-item:** http://localhost:8000/api/admin/menu (POST)

- **Create Promotional Offer:** http://localhost:8000/api/admin/promotional-offers (POST)

- **Update Menu-item** http://localhost:8000/api/admin/menu/:itemID (PUT)

- **Delete Menu-item:** http://localhost:8000/api/admin/menu/:itemID (DELETE)

- **Create order:** http://localhost:8000/api/order (POST)

- **See order history :** http://localhost:8000/api/orderHistory/:id (GET)

- **See delivery stats:** http://localhost:8000/api/deliveryStats/:orderID (GET)

- **Update delivery stats:** http://localhost:8000/api/deliveryStats/:orderID/?:userID (GET)

- **About:** http://localhost:8000/api/about (GET)

## Technologies Used
-   **Programming Language:** JavaScript
-   **Runtime Environment:** Node.js
-   **Web Framework:** Express.js
-   **Database:** MongoDB
-   **ODM (Object Data Modeling):** Mongoose
-   **Authentication:** JWT (JSON Web Tokens)
-   **Environment Variables:** dotenv
-   **Password Handling:** bcrypt
-   **Validation:** Validator
-   **Date and Time Management:** Moment.js, Moment Timezone
-   **Development Tools:** Nodemon
-   **CORS Handling:** CORS (Cross-Origin Resource Sharing)

## Authors

[LucasDaSilva96 (Lucas Da Silva) (github.com)](https://github.com/LucasDaSilva96),
[SanJuan99 (Johan Berg Ekvall) (github.com)](https://github.com/SanJuan99),
[W-nn-e (Winnie) (github.com)](https://github.com/W-nn-e),
[Loushymooshy (github.com)](https://github.com/Loushymooshy),
[philipalgebrink (Philip Älgebrink) (github.com)](https://github.com/philipalgebrink)