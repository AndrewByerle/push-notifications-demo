import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import { requestUserPermission } from './notifications/notifications.js';
import { SettingsItem } from './components/SettingsItem';



export default function App() {
  requestUserPermission()

  return (
    <View style={styles.container}>
      <SettingsItem name={"News"}/>
      <SettingsItem name={"Sports"}/>
      <SettingsItem name={"Social Media"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
