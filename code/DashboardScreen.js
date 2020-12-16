import React from 'react';
import {Text, View, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import DropDownPicker from 'react-native-dropdown-picker';

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
      post: 'Achmad Yanatun',
      kategori: 'Novel',
      karya: 'Pramoedya Ananta'
    },
    {
      id: '3',
      title: 'BUMI MANUSIA',
      post: 'Achmad Yanatun',
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

const DashboardScreen = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.containerDashboard}>
            <View style={styles.headerDashboard}>
                <View>
                    <Text style={styles.textHeaderHai}>Hai, </Text>
                    <Text style={styles.textHeaderName}>Nama Pengguna</Text>
                </View>

                <Image 
                    style={{marginTop: 10, width: 60, height: 60, marginRight: 10}} 
                    source={require('../assetimage/profiluser.png')}
                />
            </View>

            <View style={styles.bodyDashboard}>
                <Text style={styles.textQuestion}>Mau Buku Apa Hari Ini?</Text>

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

                    <View style={{height: 40, width: '50%', paddingLeft: 2.5, paddingRight: 10}}>
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
            </View>

            <View style={styles.flatdatabuku}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 10}}>Post Terbaru</Text>  
                <ScrollView>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => 
                        <Item 
                            title={item.title}
                            post={item.post}
                            kategori = {item.kategori} 
                            karya = {item.karya} />
                        }
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const Item = ({title, post, kategori, karya}) => {
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
                <Text style={styles.title}>Kategori : {kategori}</Text>
                <Text style={styles.title}>Karya : {karya}</Text>
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