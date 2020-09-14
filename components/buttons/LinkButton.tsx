import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function LinkButton(props) {
  return (
      <TouchableOpacity onPress={props.onPress} style={styles.link}>
        <Text style={styles.linkText}>{props.title}</Text>
      </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
