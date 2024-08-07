# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
## Step 1: Start the Metro Server

First, take a clone of the project using command 

```bash
git clone 'https://github.com/Gaurav-MobDev/DuAssignment.git'
```
## Step 2: Install the packages
Now install the packages added in package.json file

```bash
# using npm
npm install

# OR using Yarn
yarn add
```

## Step 3: Install Pods for iOS and sync gradle for android
This will install the packages required for iOS(Pods) and android(SDKs)
```bash
# iOS
cd ios && pod install

# android
./gradlew build
```

## Step 4: Start the Metro server
You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 5: Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of the project. Run the following command to start the _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Packages used in this project

```bash
i18n-js for multilingual support
react-native-localize to get the locale(local language)
redux-persist-sensitive-storage to store the sensitive/confidential data
redux for state management
redux-persist to store data when the app in not running
redux-saga is a middleware used with redux to perform async tasks
react-native-fast-image to handle the performance of flatlist with high-resolution images
@reduxjs/toolkit used iin conjuction with redux library
```

### About App

This mobile application is designed to let users see popular movies list. The app offers user authentication and a curated list of popular movies.

Key Features:
User Authentication:

Sign In: Users can log in securely with their credentials. For security purpose the credentials are not store in the app but just the login state and to store the data Keychain in iOS and Keystore in android is used by react-native-senstive-storage library.
There is a proper validation for both the Email and Password. The login button is disabled until both the Email and Password are validated.

Popular Movies List:

Curated List: The app displays a list of top 20 popular movies, updated regularly.
Movie Details: Users can see the movie poster and name.

User Interface:

Home Screen: Displays the popular movies list upon successful login.

Backend Integration:

API Integration: The app fetches movie data from a reliable movie database API (themoviedb.org).
Authentication Backend: Utilizes secure authentication services (using Bearer token and API key) to communicate between the server and mobile app.

Technologies Used:
Frontend:

React Native: For building the cross-platform mobile application.
Redux Toolkit: For state management.

Backend:

The Movie Database API: For fetching movie data.

User Flow:
Onboarding:

Users are greeted with a welcome screen and given the option to  sign in.
On the signIn screen user can select between the 2 languages English and Arabic.

Authentication:

For sign in, users provide their email/username and password.

Home Screen:

After logging in, users are taken to the home screen displaying a list of popular movies.
Users can scroll through the list.
User can logout from the app using Logout button.
