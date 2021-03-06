import React from 'react';
import {Text, View,FlatList, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const DATA = [
  {
    id: '1',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '2',
    title: 'BUMI MANUSIA',
    post: 'Muh Nurkhaliz',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '3',
    title: 'BUMI MANUSIA',
    post: 'Deny Kurniawan',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '4',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '5',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
];

const ProfilScreen = ()=>{
  const navigation = useNavigation();
  const user = firebase.auth().currentUser;
  const signout = ()=> {
  auth().signOut().then(()=>{
    navigation.navigate('SplashScreen');
  })
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.profileImage}
            source={require('../assetimage/profiluser.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 25, fontWeight: 'bold',  marginBottom: 5}}>
        {user.email}
        </Text>
        <View style={{width:'20%', height: '10%', backgroundColor:'#01C5C4' , borderWidth: 1, borderRadius: 10, marginBottom: 5}}>
        <TouchableOpacity onPress={signout}>
          <Text style={{textAlign: 'center',color: '#fff'}}>Log Out</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.flatdatabuku}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 10}}>Daftar Buku Anda</Text>
        <ScrollView>
          <FlatList
            data={DATA}
            renderItem={({ item }) =>
              <Item
                title={item.title}
                post={item.post}
                kategori = {item.kategori}
                karya = {item.karya}
              />
            }
          />
        </ScrollView>
      </View>
    </View>
  );
}

  const Item = ({title, post, kategori, karya}) => {
    const navigation = useNavigation();
    return(  
        <View style={{flexDirection: 'row'}}>
            <Image 
                style={{margin: 15}} 
                source={require('../assetimage/book.png')}
            />
            <View>
                <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
                <Text style={styles.title}>Post : {post}</Text>
                <Text style={styles.title}>Kategori : {kategori}</Text>
                <Text style={styles.title}>Karya : {karya}</Text>
                <View style={styles.statusbukas}>
                    <Text style={{color: '#fff'}}>Hibah</Text>
                </View>
            </View>
        </View>
    );
}
export default ProfilScreen;