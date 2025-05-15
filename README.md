# Rootsy - Plant Care Platform

<div align="center">
  <img src="/public/images/logo.png" alt="Rootsy Logo" width="200" />
  <p><em>Connecting plant enthusiasts with plant care services</em></p>
</div>

## About Rootsy

Rootsy is a comprehensive platform dedicated to connecting plant enthusiasts with specialized plant care services. Whether you need someone to take care of your plants while you're away or you're looking for expert advice on plant health, Rootsy provides the solution through its plant sitting marketplace.

## Features

### Plant Sitting Marketplace
- **Find Plant Sitters**: Browse through profiles of experienced plant sitters in your area
- **Advanced Filtering**: Filter by price, distance, services offered, and expertise level
- **Detailed Profiles**: View comprehensive information about each plant sitter, including:
  - Experience level and specialties
  - Ratings and reviews
  - Services offered and pricing
  - Availability calendar
  - Educational background and certifications

### User Experience
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Intuitive Navigation**: Easy-to-use interface with clear categorization
- **Real-time Filtering**: Instantly updated search results
- **Secure Messaging**: Direct communication between plant owners and sitters

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Component Library**: 
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [shadcn/ui](https://ui.shadcn.com/) for reusable components
- **Icons**: [Lucide React](https://lucide.dev/) icon library
- **State Management**: React's built-in state and context APIs

## Project Structure

```
/Rootsy
│
├── /app                  # Next.js app directory
│   ├── /plantsitting     # Plant sitting marketplace
│   ├── /sitter           # Individual sitter profiles
│   └── ...               # Other app routes
│
├── /components           # Reusable components
│   └── /ui               # UI components from shadcn/ui
│
├── /public               # Static assets
│   └── /images           # Images including logo
│
└── ...                   # Configuration files
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rootsy.git
   cd rootsy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Contributing

We welcome contributions to Rootsy! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries about Rootsy, please reach out to us at [contact@rootsy.com](mailto:contact@rootsy.com).
