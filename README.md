# Wanderlust Rental Project

Welcome to **Wanderlust Rental**, a modern platform for room and flat rentals built using the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a seamless experience for property owners and tenants, enabling efficient property management and booking capabilities.

## Features

- **Dynamic Property Listings**: Interactive UI showcasing available rooms and flats with detailed descriptions, images, and pricing.
- **Real-Time Availability**: Updates property availability instantly upon booking.
- **Dynamic Pricing Algorithm**: Automatically adjusts prices based on demand and other factors.
- **User Authentication**: Secure login and registration for property owners and tenants.
- **Tenant Profiles**: Manage and view tenant details, booking history, and preferences.
- **Scalable Architecture**: Implemented with modular design patterns for easy addition of new features.
- **Advanced Search Filters**: Find properties by location, price range, amenities, and more.
- **Admin Dashboard**: Manage users, properties, and bookings efficiently.

## Tech Stack

- **Frontend**: React.js with Redux for state management.
- **Backend**: Node.js with Express.js for building RESTful APIs.
- **Database**: MongoDB for data storage and Mongoose for object data modeling (ODM).
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication.
- **Styling**: Tailwind CSS for responsive and modern UI design.

## Installation

### Prerequisites
- Node.js (v16 or later)
- MongoDB (local or cloud instance)

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wanderlust-rental.git
   cd wanderlust-rental
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend` directory with the following variables:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     ```

4. Start the application:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

5. Access the application in your browser at `http://localhost:3000`.

## Folder Structure

```plaintext
wanderlust-rental/
├── backend/             # Backend API with Express.js
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   ├── utils/           # Helper functions
│   └── server.js        # Server entry point
├── frontend/            # Frontend application with React.js
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Application pages
│   │   ├── redux/       # State management
│   │   └── App.js       # App entry point
├── README.md            # Project documentation
└── package.json         # Project metadata
```

## Future Enhancements

- **Integration with Payment Gateways**: Enable secure online payments for bookings.
- **Push Notifications**: Notify tenants and owners about updates and offers.
- **Mobile App**: Develop a React Native application for mobile users.
- **Reviews and Ratings**: Allow tenants to leave feedback on properties.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature name'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or support, please contact:
- **Name**: Harsh Srivastav
- **Email**: hsrivastav099@gmail.com
- **GitHub**: [@harshustle](https://github.com/harshustle)
