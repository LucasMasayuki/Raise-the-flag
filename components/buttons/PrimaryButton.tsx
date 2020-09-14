import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function PrimaryButton(props) {
    return (            
        <TouchableHighlight
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: '#eab209',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,
    },
    text: {
      color: '#fff',
      textAlign:'center',
    }
});