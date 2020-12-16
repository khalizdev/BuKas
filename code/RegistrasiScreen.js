import React, {useState} from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView, ScrollView, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import components from './components';


const RegistrationScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    // const signUp = () => {
    //     auth()
    //     .createUserWithEmailAndPassword(state.emailaddress, state.passwordaddress)
    //     .then(() => {
    //       Alert.alert('Berhasil Membuat Akun')
    //       navigation.navigate('LoginScreen');
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/email-already-in-use') {
    //         Alert.alert('Email Sudah Terdaftar')
            
    //       }
      
    //       if (error.code === 'auth/invalid-email') {
    //         Alert.alert('Alamat Email Salah')
    //       }
    //     });
    // }
    // const onAuthStateChanged= user =>{
    //     setUser(user);
    // }
    React.useEffect(()=>{
        LogBox.ignoreAllLogs();
        // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // return subscriber;
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <Image style={styles.logologinscreen} source={require('../assetimage/books.png')}/>
                <Text style={styles.textloginscreen}>BuKas</Text>
            </View>

            <components.textInput title='Email Address' placeholder='example@gmail.com' secureEntry={false}/>
            <components.textInput title='Password' placeholder='***********' secureEntry={true}/>
            <components.textInput title='Nama Panggilan' placeholder='Nama Saya' secureEntry={false}/>
            
            <View style={styles.buttonbottom}>
                <components.primaryButton title='Submit' style={styles.submitButton} screenName='LoginScreen'/>
            </View>
        </View>
    );
}

export default RegistrationScreen;