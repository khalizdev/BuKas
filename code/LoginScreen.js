import React, {useState} from 'react';
import {Text, View, Image, TextInput,TouchableHighlight, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import components from './components';

// const firebaseConfig = {
//     apiKey: "AIzaSyCcBqT_E73rPoFWSwtmMXe9IjHSuPNPdsA",
//     authDomain: "bukas-528ac.firebaseapp.com",
//     databaseURL: "https://bukas-528ac-default-rtdb.firebaseio.com/",
//     projectId: "bukas-528ac",
//     storageBucket: "bukas-528ac.appspot.com",
//     messagingSenderId: "1095927580986",
//     appId: "1:1095927580986:web:4630bffc963a4054da6803",
//     measurementId: "G-EQSB7BGTVX"
//   };
//   if(!firebase.apps.length)
//   {
//     firebase.initializeApp(firebaseConfig);
//   }

const LoginScreen = () => {
{
    const navigation = useNavigation();
    const [state, setstate] = React.useState({emailaddress: '', passwordaddress: ''});
    const [user, setUser] = React.useState('');
    // const signIn = () => {
    //     auth()
    //     .signInWithEmailAndPassword(state.emailaddress, state.passwordaddress)
    //     .then(() => {
    //       Alert.alert('Selamat Datang')
    //       navigation.navigate('ButtomTabBuKas');
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/user-not-found') {
    //         Alert.alert('Email Tidak Terdaftar')        
            
    //       }
    //       if (error.code === 'auth/invalid-email') {
    //         Alert.alert('Alamat Email Salah')
    //       }
    //       console.error(error);
    //       if (error.code === 'auth/wrong-password') {
    //         Alert.alert('Password Salah')
    //       }
    //       console.error(error);
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
        
            <View style={styles.daftarlogin}>
                <Text style={{color: '#000000', fontSize: 18}}>Belum Memiliki Akun? </Text>
                <Text onPress = {()=> navigation.navigate('RegistrationScreen')} style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
                    Daftar
                </Text>
            </View>

            <View style={styles.buttonbottom}>
                <components.primaryButton title='Masuk' style={styles.submitButton} screenName='ButtomTabBuKas'/>
            </View>
        </View>
    );
}
}

export default LoginScreen;