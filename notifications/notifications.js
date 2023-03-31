import messaging from '@react-native-firebase/messaging';

const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
};

// Subscribe to a topic
const subscribe = (topic) => {
    messaging()
        .subscribeToTopic(topic)
        .then(() => console.log('Subscribed to topic: ', topic))
        .catch((e) => console.log(e));
};

// Unsubscribe to a topic
const unsubscribe = (topic) => {
    messaging()
        .unsubscribeFromTopic(topic)
        .then(() => console.log('Unsubscribed fom the topic', topic))
        .catch((e) => console.log(e));
};

const toggleTopicSubscription = (toggle, topic) => {
    const topicFormatted = topic.split(' ').join('_');
    
    if (toggle) {
       unsubscribe(topicFormatted);
    } else if (!toggle) {
        subscribe(topicFormatted);
    } else{
        console.log("failed to subscribe to topic")
    }
};

export { requestUserPermission, toggleTopicSubscription };