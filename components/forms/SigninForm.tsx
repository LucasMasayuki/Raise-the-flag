import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import TextField from '../inputs/TextField';
import PrimaryButton from '../buttons/PrimaryButton';
import LinkButton from '../buttons/LinkButton';

export default function SigninForm() {
    const emailPlaceholder = 'email'
    const passwordPlaceholder = 'password'

    return (
        <View>
            <View style={styles.form_rows}>
                <TextField placeholder={emailPlaceholder} />
            </View>
            <View style={styles.form_rows}>
                <TextField placeholder={passwordPlaceholder} />
            </View>
            <View style={styles.form_rows}>
                <PrimaryButton title={'Sign in'}></PrimaryButton>
            </View>
            <View style={styles.form_rows}>
                <LinkButton title={'Create account'}></LinkButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form_rows: {
        marginBottom: 10,
        textAlign: 'center'
    },
});
