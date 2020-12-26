import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const textInput = ({title, secureEntry, placeholder ,settex, set}) => {
    return (
        <View style={styles.authStyle}>
            <Text style={{marginTop: 10, marginBottom: 5}}>{title}</Text>
            <TextInput
                style={styles.textinput}
                placeholder = {placeholder}
                placeholderTextColor = "#01C5C4"
                secureTextEntry={secureEntry}
                onChangeText={text => set(text)}
                value={settex}
            />
        </View>
    )
}

const primaryButton = ({title, style, log,screenName}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate(screenName)}>
            <Text style={style}>{title}</Text>
        </TouchableOpacity>
        
    )
}

const Login = ({title, style, log,}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={log}>
            <Text style={style}>{title}</Text>
        </TouchableOpacity>
        
    )
}

export default {textInput, primaryButton, Login}