import React, {useState} from 'react';
import {Text, View, Image, TextInput,TouchableHighlight, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import components from './components';
import auth from '@react-native-firebase/auth';


const LoginScreen = () => {
{
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const checkTextInput = () => {
        if (!email.trim()) {
          Alert.alert('Silahkan Isi Email');
          return;
        }
        if (!password.trim()) {
          Alert.alert('Silahkan Isi Password');
          return;
        }
        else
        {
            signIn();
        }
      };
    const signIn = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Selamat Datang'),
          setEmail(''),
          setPassword('')
          navigation.navigate('ButtomTabBuKas');
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            Alert.alert('Email Tidak Terdaftar')       
            
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Alamat Email Salah')
          }
          console.error(error);
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Password Salah')
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
        
            <View style={styles.daftarlogin}>
                <Text style={{color: '#000000', fontSize: 18}}>Belum Memiliki Akun? </Text>
                <Text onPress = {()=> navigation.navigate('RegistrationScreen')} style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
                    Daftar
                </Text>
            </View>

            <View style={styles.buttonbottom}>
                <components.Login title='Masuk' style={styles.submitButton} log={checkTextInput}/>
            </View>
        </View>
    );
}
}

export default LoginScreen;