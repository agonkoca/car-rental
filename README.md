# Car Rental REST API

This is a simple REST API for a car rental system built with **Node.js**, **Express**, and **MongoDB**. It allows users
to register, log in, view their profile, and browse available rental cars with filtering options.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [API Endpoints](#api-endpoints)
5. [Testing the API](#testing-the-api)

---

## Features

- User registration and login with JWT authentication.
- Fetch user profile (protected route).
- Fetch a list of rental cars sorted by price.
- Filter cars by `year`, `color`, `steering_type`, and `number_of_seats`.

---

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building the API.
- **MongoDB**: Database for storing users and cars.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT (JSON Web Tokens)**: For user authentication.
- **Bcrypt.js**: For password hashing.
- **Dotenv**: For managing environment variables.

---

## Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher) installed.
- **MongoDB** installed and running locally.
- **Git** (optional, for cloning the repository).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/car-rental.git
   cd car-rental
2. Install dependencies:
   ```bash
   npm install
3. Create a `.env` file in the root directory and add the following environment variables:
   ```text
   MONGO_URI=mongodb://localhost:27017/carRental
   JWT_SECRET=78064afe73b76922f53d900afe9a45b8ad38be254b2053ab930a5698192f41ccd6776ef36bebb95f4795a4f150c5f558f553f3e5b8bd623b31c45c41366dabbc13946b095795578faa2d202320fdc83943a4a5e2d12100e1842fa0d1dcc04444e4c4d8fa36dbbf8fb5f660e3c76b68a5ee38db195b461af295435b6ee3e265b2
   PORT = 5000
4. Start the server:
   ```bash
   npm start
5. The server will start on `http://localhost:5000`. You can now test the API endpoints.

## API Endpoints

1. **User Registration**
    - **URL**: `/auth/register`
    - **Method**: `POST`
    - **Request Body**:
       ```json
      {
      "fullName": "Agon Koca",
      "email": "agon@example.com",
      "username": "agonkoca",
      "password": "password123"
      } 
    - **Response**:
      ```json
      {
      "message": "User registered successfully"
      }
2. **User Login**
    - **URL**: `/auth/login`
    - **Method**: `POST`
    - **Request Body**:
       ```json
      {
      "username": "agonkoca",
      "password": "password123"
      }
             
    - **Response**:
         ```json
      {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JjZjZjMmQ5MTgyNWE3OWY4OTUyMGMiLCJpYXQiOjE3NDA1MTE2NzEsImV4cCI6MTc0MDUxNTI3MX0.kWpbWDdYpTxAuINMacXqD2duodjvCos0M-ztRVdpTcM"
      }

3. **User Profile**
    - **URL**: `/auth/my-profile`
    - **Method**: `GET`
    - **Headers**:
       ```text
      Authorization: Bearer <eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JjZjZjMmQ5MTgyNWE3OWY4OTUyMGMiLCJpYXQiOjE3NDA1MTI1NDIsImV4cCI6MTc0MDUxNjE0Mn0.NquLWbUUVzB6FqBklh_fdAcPepSjWVVJWhvmouXhhHI>
    - **Response**:
      ```json
      {
      "fullName": "Agon Koca",
      "email": "agon@gmail.com ",
      "username": "agonkoca"
      }
4. **Fetch Rental Cars**
    - **URL**: `/cars/rental-cars`
    - **Method**: `GET`
    - **Query Parameters** (optional):
        - `year`: Filter by manufacturing year.
        - `color`: Filter by color.
        - `steering_type`: Filter by steering type (`automatic` or `manual`).
        - `number_of_seats`: Filter by the number of seats.
    - **Response**
       ```json
      [
      {
      "_id": "60e84e45772d9c247d179ea7",
      "name": "Golf mk8",
      "price_per_day": 50.0,
      "year": 2015,
      "color": "black",
      "steering_type": "automatic",
      "number_of_seats": 5
      }
      ]

## Testing the API

You can test the API using tools like:

- **[Postman](https://www.postman.com/)**
- **[curl](https://curl.se/)**
- **[Thunder Client](https://www.thunderclient.com/)** (VS Code extension).

### Example Requests

1. **Register a User**:
   ```bash
   curl -X POST http://localhost:5000/auth/register -H "Content-Type: application/json" -d '{
     "fullName": "Name LastName",
     "email": "email@example.com",
     "username": "username",
     "password": "password123"
   }'

2. **Log in a User**:
   ```bash
   curl -X POST http:://localhost:5000/auth/login -H "Content-Type: application/json" -d '{
   "username": "username",
   "password": "password123
   }'

3. **Fetch Rental Cars**:
   ```bash
   curl -X GET "http://localhost:5000/cars/rental-cars?color=black"

## Author

Agon Koca