import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const textInput = ({title, secureEntry, placeholder}) => {
    return (
        <View style={styles.authStyle}>
            <Text style={{marginTop: 10, marginBottom: 5}}>{title}</Text>
            <TextInput
                style={styles.textinput}
                placeholder = {placeholder}
                placeholderTextColor = "#01C5C4"
                secureTextEntry={secureEntry}
            />
        </View>
    )
}

const primaryButton = ({title, style, screenName}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate(screenName)}>
            <Text style={style}>{title}</Text>
        </TouchableOpacity>
    )
}

export default {textInput, primaryButton}