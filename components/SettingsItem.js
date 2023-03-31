import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import { useState } from 'react';
import { toggleTopicSubscription } from '../notifications/notifications';

const SettingsItem = (props) => {
  const [toggle, setToggle] =
      props.toggleControl || useState(props.default || false);

  return (
      <View
          style={{
              paddingVertical: 12,
              paddingHorizontal: 16,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
          }}
      >
          <Text style={{ fontSize: 20 }}>{props.name}</Text>
          <Switch
              onValueChange={() => {
                  setToggle(!toggle);
                  toggleTopicSubscription(toggle, props.name);
              }}
              value={toggle}
          />
      </View>
  );
};

export { SettingsItem };