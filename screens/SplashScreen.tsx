import { StackScreenProps } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';

import { RootStackParamList } from '../types';
import InitialView from '../components/views/InitialView';

export default function SplashScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Splash'>) {
  // TODO authenticate function
  if (true) {
    navigation.navigate('SignIn');
  }

  return (
    <InitialView component={
      <ActivityIndicator style={styles.loading} color='white' size='large' />
    } />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
