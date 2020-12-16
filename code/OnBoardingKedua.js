import React from 'react';
import {Text, View, Image} from 'react-native';
import components from './components';
import styles from './Styles';

const OnBoardingKedua = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.logosplashscreen} source={require('../assetimage/transaction.png')}/>
            <Text style={styles.textonboarding}>Transaksi Buku</Text>
            <Text style={styles.textonboardingdesc}>Jual, Tukar, dan Hibahkan</Text>
            <Text style={styles.textonboardingdesc}>buku kalian di BuKas</Text>
            <View style={styles.buttonbottom}>
                <components.primaryButton title='Lanjutkan' style={styles.submitButton} screenName='LoginScreen'/>  
            </View>
        </View>
    );
}

export default OnBoardingKedua;