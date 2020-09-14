import { StackScreenProps } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';

import InitialView from '../components/views/InitialView';
import SigninForm from '../components/forms/SigninForm';

export default function SignInScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'SignIn'>) {
  return (
    <InitialView component={
      <SigninForm />
    } />
  );
}

const styles = StyleSheet.create({
});
