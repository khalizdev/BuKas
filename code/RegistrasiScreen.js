import React, {useState} from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView, ScrollView, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import components from './components';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';


const RegistrationScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!email.trim()) {
          Alert.alert('Silahkan Isi Email');
          return;
        }
        //Check for the Email TextInput
        if (!password.trim()) {
          Alert.alert('Silahkan Isi Password');
          return;
        }
        else
        {
            signUp();
        }
      };
    const signUp = () => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {            
            Alert.alert('Berhasil Mendaftar'),
            navigation.navigate('ButtomTabBuKas'),
            setEmail(''),
            setPassword('')
            console.log(err)
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email Sudah Terdaftar')
            
          }
      
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Alamat Email Salah')
          }
          if (error.code === 'auth/weak-password') {
            Alert.alert('Minimal Panjang Password 6 karakter')
          }
          console.error(error);
        });
    }

      
    React.useEffect(()=>{
        LogBox.ignoreAllLogs();
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <Image style={styles.logologinscreen} source={require('../assetimage/books.png')}/>
                <Text style={styles.textloginscreen}>BuKas</Text>
            </View>
            <components.textInput title='Email Address' placeholder='example@gmail.com' secureEntry={false} set={setEmail} settex={email}/>
            <components.textInput title='Password' placeholder='***********' secureEntry={true} set={setPassword} settex={password}/>            
            <View style={styles.buttonbottom}>
                <components.Login title='Submit' style={styles.submitButton} log={checkTextInput}/>
            </View>
        </View>
    );
}

export default RegistrationScreen;