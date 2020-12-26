import React, { useEffect } from 'react';
import {Text, View, Image} from 'react-native';
import styles from './Styles';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('OnBoardingSatu');
        }, 2000)
    }, [navigation]);
    return(
        <View style={styles.container}>
            <View>  
                <Image style={styles.logosplashscreen} source={require('../assetimage/books.png')}/>
                <Text style={styles.textsplashscreen}>BuKas</Text>
            </View>
        </View>
    );
}

export default SplashScreen;