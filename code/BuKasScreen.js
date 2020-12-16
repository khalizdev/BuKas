import React from 'react';
import {Text, View,Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import DropDownPicker from 'react-native-dropdown-picker';
import components from './components';

const BuKasScreen = ()=>{
    return (
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

        <View style={styles.inputBuku}>
          <ScrollView>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 10, marginBottom: 5}}>
              Tambah Buku
            </Text>

            <View style={styles.columntambahbuku}> 
              <components.textInput title='Judul Buku' placeholder='ex. Bumi Manusia' secureEntry={false}/>
            </View>

            <View style={styles.rowtambahbuku}>
              <View style={{justifyContent: 'center'}}>
                <Text style={{marginTop: 10, marginBottom: 5}}>Lokasi</Text>
                <DropDownPicker
                  dropDownStyle={{backgroundColor: '#fff'}}
                  items={[
                    {label: 'Bandung', value: 'Bandung'},
                    {label: 'Jakarta', value: 'Jakarta'},
                    {label: 'Yogyakarta', value: 'Yogyakarta'},
                  ]}
                  defaultIndex={0}
                  containerStyle={{height: 40, width: 180}}
                  placeholder="Pilih Daerah"
                  onChangeItem={item => console.log(item.label, item.value)}
                />

                <Text style={{marginTop: 10, marginBottom: 5}}>Kategori Buku</Text>
                <DropDownPicker
                  dropDownStyle={{backgroundColor: '#fff'}}
                  items={[
                    {label: 'Hibah', value: 'Hibah'},
                    {label: 'Tukar', value: 'Tukar'},
                    {label: 'Jual', value: 'Jual'},
                  ]}
                  defaultIndex={0}
                  containerStyle={{height: 40, width: 180}}
                  placeholder="Pilih Kategori"
                  onChangeItem={item => console.log(item.label, item.value)}
                />
              </View>
              <TouchableOpacity>
                <View style={styles.cameraButton}>
                  <Icon name="camera-outline" size={50} color="black"/>
                  <Text>Upload Foto Buku</Text>
                  </View>
              </TouchableOpacity>
            </View>
                
            <View style={styles.columntambahbuku}>
              <components.textInput title='Karya Buku' placeholder='ex: Ananta Pramoedya' secureEntry={false}/>
              <components.textInput title='Alamat' placeholder='ex: Jl. Telekomunikasi no. 1' secureEntry={false}/>
              <components.textInput title='Tukar Buku Dengan' placeholder='ex: React Native Programming' secureEntry={false}/>
              <components.textInput title='Harga Jual Buku' placeholder='ex: 12000' secureEntry={false}/>
            </View>

            <View style={styles.buttonbottomsavebuku}>
              <TouchableOpacity 
                underlayColor="#01C5C4"
                onPress={()=> Alert.alert('Save Buku Berhasil')}>
                <Text style={styles.submitButton}>Post Buku</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>     
        </View>
      </View>
    );
  }

  export default BuKasScreen;