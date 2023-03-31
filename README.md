# Push Notifications Demo
Demo for COMP 523 tech talk on push notifications. The Firebase Cloud Messaging library is used to send push notifications to Android devices. IOS setup requires additional steps and will not be covered in this tutorial.

# App Setup
Prerequisites include Node.js and a mobile simulator with the Expo Go app installed on the device. The mobile device can be a physical Android device (recommended) or a virtual android emulator configured from Android Studio. VSCode is the recommended development environment.

After cloning the project and running `npm install` in the VSCode terminal, use `npm start` to verify that the Expo Go app is installed on the mobile device. After the app loads, errors are expected at this step. Firebase Messaging is not compatible with Expo unless we are running a development build, which is the next step.

To use EAS Build to create a development build, follow the [Expo Development Build Documentation](https://docs.expo.dev/development/create-development-builds/). This involves using npm to install the EAS CLI, `expo-dev-client`, and run the build command with `eas build --profile development --platform android`.
