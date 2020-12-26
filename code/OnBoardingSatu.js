import React from 'react';
import {Text, View, Image} from 'react-native';
import components from './components';
import styles from './Styles';
import firebase from '@react-native-firebase/app';

const OnBoardingSatu = ({navigation}) => {
    const user = firebase.auth().currentUser;
    if(user)
    {
        navigation.navigate('ButtomTabBuKas');
    }
    return(
        <View style={styles.container}>
            <Image style={styles.logosplashscreen} source={require('../assetimage/location.png')}/>
            <Text style={styles.textonboarding}>Location Based</Text>
            <Text style={styles.textonboardingdesc}>Informasi buku berdasarkan lokasi</Text>
            <Text style={styles.textonboardingdesc}>yang kamu Inginkan</Text>
            <View style={styles.buttonbottom}>
                <components.primaryButton title='Lanjutkan' style={styles.submitButton} screenName='OnBoardingKedua'/>
            </View>
        </View>
    );
}

export default OnBoardingSatu;