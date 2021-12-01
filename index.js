
import {AppRegistry} from 'react-native';
import App from './src/Wrapper';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";
PushNotification.configure({


    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

    },
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    requestPermissions: Platform.OS === 'ios',
});
AppRegistry.registerComponent(appName, () => App);
