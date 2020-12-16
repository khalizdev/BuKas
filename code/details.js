import React, { useState } from 'react';
import { Text, View, Image} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import components from './components';
import Discussion from './Discussion';


const DetailsScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: '#D0E8F2'}}>
            <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 10, marginLeft: 10}}>Detail Buku</Text>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <Image
                    style={{ marginTop: 15 }}
                    source={require('../assetimage/book.png')}
                />
            </View>
            <View style={styles.DetailsBuku}>
                <Text style={{fontWeight: 'bold', fontSize: 25 }}>BUMI MANUSIA</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ flex: 1, marginTop: 5, fontSize: 18 }}>Pemilik</Text>
                    <Text style={{ flex: 0.1, marginTop: 5, fontSize: 18 }}>:</Text>
                    <Text style={{ flex: 4, marginTop: 5, fontSize: 18 }}>Achmad Yanatun</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ flex: 1, marginTop: 5, fontSize: 18 }}>Kategori</Text>
                    <Text style={{ flex: 0.1, marginTop: 5, fontSize: 18 }}>:</Text>
                    <Text style={{ flex: 4, marginTop: 5, fontSize: 18 }}>Novel</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ flex: 1, marginTop: 5, fontSize: 18 }}>Karya</Text>
                    <Text style={{ flex: 0.1, marginTop: 5, fontSize: 18 }}>:</Text>
                    <Text style={{ flex: 4, marginTop: 5, fontSize: 18 }}>Pramoedya Ananta</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ flex: 1, marginTop: 5, fontSize: 18 }}>Kondisi</Text>
                    <Text style={{ flex: 0.1, marginTop: 5, fontSize: 18 }}>:</Text>
                    <Text style={{ flex: 4, marginTop: 5, fontSize: 18 }}>80% Mulus</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ flex: 1, marginTop: 5, fontSize: 18 }}>Deskripsi</Text>
                    <Text style={{ flex: 4.1, marginTop: 5, fontSize: 18 }}>:</Text>
                </View>
                <Text style={{marginTop: 5, fontSize: 18 }}>Buku ini baru saya baca sekali, dan saya sudah menyelesaikannya, sekarang buku ini akan saya berikan kepada anda.</Text>
                <View style={styles.buttonbottom}>
                    <components.primaryButton title='Hubungi Pemilik Buku' style={styles.submitButton} screenName={Discussion}/>
                </View>
            </View>
        </View>
    );
}

export default DetailsScreen;