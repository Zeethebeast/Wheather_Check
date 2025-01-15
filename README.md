---

# Weather App with Vite, React, TypeScript, TanStack Query, OpenWeatherAPI, and ShadCN UI By Chima Samuel Chijioke

This is my portfolio project. It is a modern weather app built using Vite, React, TypeScript, TanStack Query, OpenWeatherAPI, and ShadCN UI. The app allows users to check the weather for their current location or search for weather in any city around the world.

## Features

- **Weather Data**: Fetches real-time weather data from the OpenWeatherAPI.
- **Responsive UI**: Built with ShadCN UI components for a clean and responsive design.
- **State Management**: Uses TanStack Query for efficient data fetching, caching, and synchronization.
- **TypeScript Support**: Fully typed app to ensure type safety throughout the development process.
- **Optimized Development**: Uses Vite for fast development builds and hot module replacement (HMR).

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (>= 16.0)
- [npm](https://www.npmjs.com/) (>= 7.0) or [Yarn](https://yarnpkg.com/) (>= 1.22)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zeethebeast/weather-app.git
   cd weather-app
   ```

2. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. Create an `.env` file in the root of the project and add your OpenWeatherAPI key:

   ```
   VITE_OPENWEATHER_API_KEY=your-api-key-here
   ```

### Running the App

To run the app in development mode:

```bash
npm run dev
```

This will start the development server, and you can view the app in your browser at `http://localhost:5173`.

### Building for Production

To build the app for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **Vite**: A modern build tool that provides fast development and optimized production builds.
- **React**: A JavaScript library for building user interfaces, used here with functional components and hooks.
- **TypeScript**: Provides static typing for a safer development experience.
- **TanStack Query**: A powerful library for fetching, caching, and syncing server state in React applications.
- **OpenWeatherAPI**: Provides real-time weather data, used to fetch weather information based on the user’s search or location.
- **ShadCN UI**: A collection of components designed to build modern and beautiful user interfaces.

## Folder Structure

```bash
src/
  public/         # Static assets like images, icons
  components/     # React components used across the app
  hooks/          # Custom hooks like fetching weather data
  pages/          # Page components (Home, Weather details, etc.)
  api/       # API calls and services (OpenWeatherAPI)
  types/          # TypeScript types and interfaces
  App.tsx         # Main App component
  App.css 
  index.tsx       # Entry point for React
```

## Usage

1. **Search for Weather**: You can search for any city to see its current weather.
2. **Current Location**: The app can automatically fetch the weather for your current location using the browser’s geolocation API.
3. **Weather Details**: Detailed information such as temperature, humidity, wind speed, and weather conditions will be displayed.

## Contributing

I welcome contributions to improve this project! If you have any suggestions, improvements, or bug fixes, please fork the repository, make your changes, and create a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add your feature'`.
4. Push to your forked repository: `git push origin feature/your-feature`.
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
