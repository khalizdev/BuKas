import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, ScrollView, TouchableOpacity,ActivityIndicator, SafeAreaView, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const DashboardScreen = () => {
    const user = firebase.auth().currentUser;
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [lokasi, setLokasi] = React.useState('');
    const [kategori, setKategori] = React.useState('');
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const subscriber = firestore()
        .collection('Buku')
        .onSnapshot(querySnapshot => {
          const users = [];
    
          querySnapshot.forEach(documentSnapshot => {
            users.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });    
          setUsers(users);
          setLoading(false);
        });
    
      return () => subscriber();
    }, []);

    if (loading) {
      return <ActivityIndicator />;
    }
    return(
        <View style={styles.containerDashboard}>
            <View style={styles.headerDashboard}>
                <View>
                    <Text style={styles.textHeaderHai}>Hai, </Text>
                    <Text style={styles.textHeaderName}>{user.email}</Text>
                </View>
                <Image 
                    style={{marginTop: 10, width: 60, height: 60, marginRight: 10}} 
                    source={require('../assetimage/profiluser.png')}
                />
            </View>

            <View style={styles.bodyDashboard}>
                <Text style={styles.textQuestion}>Mau Buku Apa Hari Ini?</Text>
                
            </View>

            <View style={styles.flatdatabuku}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 10, marginBottom: 10}}>Post Terbaru</Text>  
                <ScrollView>    
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
                    <View style={{height: 40, width: '50%', paddingLeft: 10, paddingRight: 2.5}}>
                        <DropDownPicker
                            items={[
                                {label: 'Bandung', value: 'Bandung'},
                                {label: 'Jakarta', value: 'Jakarta'},
                                {label: 'Yogyakarta', value: 'Yogyakarta'},
                            ]}
                            defaultIndex={0}
                            containerStyle={{height: 40}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder="Location"
                            onChangeItem={item => console.log(item.label, item.value)}
                        />
                    </View>

                    <View style={{height: 30, width: '50%', paddingLeft: 2.5, paddingRight: 10}}>
                        <DropDownPicker
                            items={[
                                {label: 'Hibah', value: 'Hibah'},
                                {label: 'Tukar', value: 'Tukar'},
                                {label: 'Jual', value: 'Jual'},
                            ]}
                            defaultIndex={0}
                            containerStyle={{height: 40}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder="Kategori"
                            onChangeItem={item => console.log(item.label, item.value)}
                        />
                    </View>
                </View>
                <FlatList
                  data={users}
                  renderItem={({ item }) => (
                    <View style={{flexDirection: 'row'}}>
                        <Image 
                          style={{margin: 15}} 
                          source={require('../assetimage/book.png')}/>
                        <View style={{flexDirection: 'column'}}>
                          <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>{item.judul}</Text>
                          <Text style={styles.title}>Post : {item.email}</Text>
                          <Text style={styles.title}>Karya : {item.karya}</Text>
                          <Text style={styles.title}>Lokasi : {item.lokasi}</Text>
                          <View style={styles.statusbukas}>
                            <Text style={{color: '#fff'}}>{item.kategori}</Text>
                          </View>
                          <View style={styles.ambilbukas}>                          
                            <Text 
                              style={{color: '#fff', fontSize: 15}}
                              onPress = {()=> Linking.openURL('whatsapp://send?text=Saya Mau Buku '+item.judul+' Apakah masih tersedia?&phone='+item.nomor)}
                              value={item.nomor}
                              >Ambil</Text>

                          </View>
                          
                        </View>
                    </View>
                  )
                  }
                />
              </SafeAreaView>
          </ScrollView> 
            </View>
        </View>
    )
}

const Item = ({title, post}) => {
    const navigation = useNavigation();
    return(  
        <TouchableOpacity style={{flexDirection: 'row'}} onPress = {()=> navigation.navigate('DetailsScreen')}>
            <Image 
                style={{margin: 15}} 
                source={require('../assetimage/book.png')}
            />
            <View style={{flexDirection: 'column'}} >
                <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
                <Text style={styles.title}>Post : {post}</Text>
                <View style={styles.statusbukas}>
                    <Text style={{color: '#fff'}}>Hibah</Text>
                </View>
                {/* <View style={styles.ambilbukas}>
                    <Text style={{color: '#fff', fontSize: 15}} onPress = {()=> navigation.navigate('DetailsScreen')}>
                        Ambil
                    </Text>
                </View> */}
            </View>
        </TouchableOpacity>
    );
  }

export default DashboardScreen;