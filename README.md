```markdown
# Weather Desktop App

## Overview
This is a Windows desktop application built using Angular 2+, Electron, and NgRx for state management. It allows users to log in using their Google account via OAuth2, fetch weather data for a selected city, and manage app settings (such as the weather API URL and key) using a local SQLite database.

## Tech Stack
- **TypeScript**
- **Angular 2+** (for front-end)
- **Electron** (for building the desktop app)
- **NgRx** (for state management)
- **Axios** (for API calls)
- **SQLite** (for local database)
- **OAuth2** (for Google login)

## Features
- **Login**: Users can log in using their Google account via OAuth2.
- **Weather Information**: Users can fetch and view weather information for a selected city.
- **Settings**: Users can configure the weather API URL and API key, stored in a local SQLite database.
- **State Management**: NgRx is used for state management of the app's login, settings, and weather data.
- **Local Storage**: SQLite is used to store user details and app settings.

## Installation and Setup

### Prerequisites
- **Node.js**: You need to have Node.js installed on your machine. You can download it [here](https://nodejs.org/).
- **Google OAuth2 Client ID**: Create your OAuth2 credentials by following [this guide](https://developers.google.com/identity/protocols/oauth2).
- **Weather API Key**: Sign up for a free API key from [WeatherStack](https://weatherstack.com/product) or any other weather API provider.

### Clone the Repository
```bash
git clone <repository_url>
cd weather-app
```

### Install Dependencies
```bash
npm install
```

### Electron Setup
Make sure to install Electron globally or as a dev dependency in the project:
```bash
npm install electron --save-dev
```

### Configure OAuth2 and API Key
1. After creating the OAuth2 credentials, add your `CLIENT_ID` to the appropriate place in the `auth.service.ts`.
2. Add the default weather API URL and key in the settings table of the SQLite database or through the settings UI after app installation.

### SQLite Setup
SQLite will automatically create the database and necessary tables the first time the app is run. You don't need to manually set up the database.

### Running the App
1. To run the app in development mode:
   ```bash
   npm run electron:start
   ```

2. The Electron window should now open with the Angular app running inside.

### Building the App
To package the app for distribution, use Electron Packager:
```bash
npx electron-packager . weather-app --platform=win32 --arch=x64
```
This will generate an executable file for Windows inside a folder named `weather-app-win32-x64`.

## Usage

### Home Screen
- **Title Bar**: The title bar includes the app name on the left, along with settings and login buttons on the right. The window control buttons (minimize, maximize, close) are on the far right.
- **Body**: The home screen displays a welcome message and instructions to log in and fetch weather information. Once logged in, users can enter a city name and retrieve weather data by clicking the "Get Weather" button.

### Settings Screen
- The settings screen allows the user to enter and update the weather API URL and key.
- These settings are stored in a local SQLite database.

### Login
- Clicking the "Login" button opens a Google login popup.
- On successful login, the user’s details (first name, last name, email) are saved in the SQLite database.
- If the user logs out, they are required to log in again to access weather data.

### Fetching Weather Data
- After logging in, users can enter a city name in the input field on the home screen and click "Get Weather".
- The app will use Axios to call the weather API and display the fetched data (temperature, weather condition, etc.).

## Project Structure

```
weather-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   ├── settings/
│   │   │   │   ├── settings.component.ts
│   │   │   │   ├── settings.component.html
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   ├── services/
│   │   │   ├── weather.service.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── settings.service.ts
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   ├── effects/
├── main.js      # Electron main process
├── package.json
└── README.md
```

## Unit Testing

### Running Unit Tests
Unit tests are written using Jasmine and Karma. To run the tests, use:
```bash
npm run test
```

### Test Cases
- **WeatherService Test**: Ensures that the weather data is fetched correctly using the API.
- **AuthService Test**: Validates the OAuth2 login functionality.
- **SettingsService Test**: Ensures that the app settings are being saved and retrieved from SQLite properly.

## Logging
The app includes basic logging for debugging purposes using `electron-log`. Logs are automatically written to a file in the app's data directory.

## Troubleshooting

### Common Issues:
- **Google OAuth2 Login Fails**: Ensure that the `CLIENT_ID` for Google OAuth is correctly set up in the `auth.service.ts`.
- **Weather Data Not Fetching**: Check that the API URL and key are correctly set in the settings.
- **Database Not Created**: If the SQLite database is not created, ensure that the `sqlite3` package is properly installed and that Electron has access to the file system.

## Contributing
Feel free to submit issues, pull requests, or suggestions to improve the app.

## License
This project is licensed under the MIT License.
```
