# Push Notifications Demo
Demo for COMP 523 tech talk on push notifications. The Firebase Cloud Messaging library is used to send push notifications to Android devices. IOS setup requires additional steps and will not be covered in this tutorial.

# App Setup
Prerequisites include Node.js and a mobile simulator with the Expo Go app installed on the device. The mobile device can be a physical Android device (recommended) or a virtual android emulator configured from Android Studio. VSCode is the recommended development environment.

After cloning the project and running `npm i @react-native-firebase/messaging` and `npm install` in the VSCode terminal, use `npm start` to verify that the Expo Go app is installed on the mobile device. After the app loads, errors are expected at this step. Firebase Messaging is not compatible with Expo unless we are running a development build, which is the next step.

To use EAS Build to create a development build, follow the [Expo Development Build Documentation](https://docs.expo.dev/development/create-development-builds/). This involves using npm to install the EAS CLI, `expo-dev-client`, and run the build command with `eas build --profile development --platform android`

Run the Development Build on the mobile device with `npx expo start --dev-client`

## Setting Up FCM

1. Go to the Firebase console and create a new project.
2. Navigate to Project Settings, click Add App, and click the android icon, and follow the steps. The field Android Package Name should match the `android.package` value in the `app.json` file.
3. Skip the option to download the google-services.json file, keep clicking next to finish setup.
4. Run `eas credentials` in the project folder terminal. Select Android, development, keystore > setup a new keystore > Create a New Build Credential Configuration. There should now show 2 configurations in the terminal. Add both of the SHA1 Fingerprint values to the Android App (created  in the previous step) settings in firebase. Do so with the Add Fingerprint button from the firebase console.
5. Since the firebase android app setup is now finished, download the `google-services.json` file and move it into the project folder.
6. In `app.json`, add `android.googleServicesFile` field specifying the path to `google-services.json`. 
Ex. {
	“android”: {
		"googleServicesFile": "./google-services.json"
	}
}


### Server Credentials

Navigate to Project Settings and click on the Cloud Messaging tab next to “General.”

If the Cloud Messaging API (Legacy) is disabled, enable it by clicking on the three dots next to the message. After the legacy API is enabled, copy the Server Key.  Paste the Server Key into your [Expo Account Dashbord](https://expo.dev/accounts/zizzer0/projects/push-notifications-demo/credentials) under the Credentials tab > click your Application Identifier > FCM Server Key > Add a FCM Server Key > Google Cloud Messaging Token. 

Run the eas build command `eas build --profile development --platform android` again. Make sure google-services.json is commented in the gitignore. Always remove the comment before pushing with git.

Run the Development Build on the mobile device again with `npx expo start --dev-client`

## Sending a notification
Notifications can be sent in many ways such as from the firebase console, curl, through Postman, and from a backend code (ex. Firebase admin). Postman is an easy way to test post requests to the FCM api.

Create a post request to the endpoint https://fcm.googleapis.com/fcm/send with Query Parameters:
Authorization, Value: key=<FCM Server Key>
Content-Type,  Value: application/json

The body of the request is a raw json object. `{
 "to" : "/topics/name_of_topic_or_FCM_key",
 "notification" : {
     "title": "Notification Title",
     "body" : "Notification Message"
 }
}`
<img width="1037" alt="Screenshot 2023-04-02 at 11 42 04 AM" src="https://user-images.githubusercontent.com/69771004/229363910-702a1ebb-4f1a-4e14-870c-fcd2d4c789fa.png">

# Video Demo:
https://www.youtube.com/watch?v=5KEDtNTAGMU


