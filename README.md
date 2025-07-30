# 🏠 Reloomate

**Reloomate** is a student housing mobile application built using **React Native** and **Expo**. It helps students easily find, connect, and manage accommodation.

https://github.com/user-attachments/assets/534fd452-09ff-4899-9b59-8892e158edeb


## 🚀 Features

- Beautiful **splash screen** with background image and caption
- Interactive **onboarding screens** with pager view
- `Skip` button to go directly to sign-in

## 📱 Screens

- Splash Screen (`app/index.js`)
- Onboarding Screens (`get-started-1.js`, `get-started-2.js`, `get-started-3.js`)
- Sign-In Screen (`sign-in.js`)
- Navigation Setup (`app/_layout.js` or React Navigation setup)

## 🛠️ Technologies Used

- **React Native** with **Expo**
- **React Native Pager View** for onboarding carousel
- **React Navigation** for screen transitions
- **Styled Components** or **StyleSheet** for styling

## 🧑‍💻 Project Structure

reloomate/
├── app/
│ ├── index.js # Splash screen
│ ├── sign-in.js # Sign-in screen
│ ├── get-started-1.js # Onboarding 1
│ ├── get-started-2.js # Onboarding 2
│ ├── get-started-3.js # Onboarding 3
│ ├── get-started.js # Pager for onboarding
│ └── _layout.js # Navigation entry point
├── assets/
│ ├── images/
│ │ ├── wall.jpg
│ │ └── logo.png
├── package.json
└── README.md

## 🔧 Installation

```bash
git clone git@github.com:dilsha6/reloomate.git
cd reloomate
npm install
npx expo start

If you run into SSH errors, you can clone with HTTPS:

git clone https://github.com/dilsha6/reloomate.git

📲 Running the App

Make sure you have the Expo Go app installed on your mobile device.

Then run:

npx expo start

Scan the QR code using Expo Go to view the app on your phone.
📦 Dependencies

expo install react-native-pager-view
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated


 © Dilsha K

