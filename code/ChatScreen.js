import React from 'react';
import { View, Text , Image} from 'react-native';

const ChatScreen = () => {
    return(
      <View style={{margin: 10}}>
        <View style={{backgroundColor:'#01C5C4', flexDirection: 'row', borderWidth: 1, padding: 5, borderRadius: 10, marginBottom: 5}}>
          <Image
              style={{width: 50, height: 50}}
              source={require('../assetimage/profiluser.png')}
            />
            <View style={{flexDirection: 'column', marginLeft: 20, justifyContent: 'center'}}>
               <Text style={{fontWeight: 'bold', fontSize: 20}}>Ahcmad Yanatun</Text>
               <Text style={{fontSize: 15,color: '#fff'}}>Bukunya masih Ready? </Text>
            </View>
        </View>
        <View style={{backgroundColor:'#01C5C4',flexDirection: 'row', borderWidth: 1, padding: 5, borderRadius: 10, marginBottom: 5}}>
          <Image
              style={{width: 50, height: 50}}
              source={require('../assetimage/profiluser.png')}
            />
            <View style={{flexDirection: 'column', marginLeft: 20, justifyContent: 'center'}}>
               <Text style={{fontWeight: 'bold', fontSize: 20}}>Muh Nurkhaliz</Text>
               <Text style={{fontSize: 15,color: '#fff'}}>Bisa Nego ga pak?</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#01C5C4',flexDirection: 'row', borderWidth: 1, padding: 5, borderRadius: 10, marginBottom: 5}}>
          <Image
              style={{width: 50, height: 50}}
              source={require('../assetimage/profiluser.png')}
            />
            <View style={{flexDirection: 'column', marginLeft: 20, justifyContent: 'center'}}>
               <Text style={{fontWeight: 'bold', fontSize: 20}}>Deny Kurniawan</Text>
               <Text style={{fontSize: 15,color: '#fff'}}>Ketemu dimana pak? </Text>
            </View>
        </View>
        <View style={{backgroundColor:'#01C5C4',flexDirection: 'row', borderWidth: 1, padding: 5, borderRadius: 10, marginBottom: 5}}>
          <Image
              style={{width: 50, height: 50}}
              source={require('../assetimage/profiluser.png')}
            />
            <View style={{flexDirection: 'column', marginLeft: 20, justifyContent: 'center'}}>
               <Text style={{fontWeight: 'bold', fontSize: 20}}>Kandita Andiali</Text>
               <Text style={{fontSize: 15,color: '#fff'}}>Saya lagi di saliramie, sini aja ambil bukunya</Text>
            </View>
        </View>
      </View>
    )
  }

  export default ChatScreen;