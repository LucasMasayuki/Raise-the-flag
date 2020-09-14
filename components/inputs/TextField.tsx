import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function TextField(props) {
  const [value, onChangeText] = React.useState();

  return (
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={props.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
