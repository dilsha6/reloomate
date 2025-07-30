# 🏠 Reloomate

**Reloomate** is a student housing mobile application built using **React Native** and **Expo**. It helps students easily find, connect, and manage accommodation.
![Screenshot_2025_07_30_18_31_32_15_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/422d3cb8-6ea2-439d-8a11-a7e09310732f)
![Screenshot_2025_07_30_18_31_38_61_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/265a0d05-0c12-49d8-be52-4504c2b043a1)
![Screenshot_2025_07_30_18_31_41_67_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/29cfa92d-a92e-4c17-a951-e183897725c4)
![Screenshot_2025_07_30_18_31_41_67_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/80bf2896-98fe-4c9e-9571-0d3973603e54)
![Screenshot_2025_07_30_18_31_44_25_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/ee30faa7-dc4c-4464-9812-5cad4e595f3a)
![Screenshot_2025_07_30_18_31_47_49_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/7e61fe9a-4fee-4039-acf6-4a3a12e666e0)


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

