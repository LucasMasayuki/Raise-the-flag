import { StackScreenProps } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function InitialView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Raise the <FontAwesome size={30} style={styles.flag} name={'flag'} />
      </Text>
      {props.component}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: '30px'
  },
});
