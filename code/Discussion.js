import React from 'react'
import { Text, View, TextInput, TouchableOpacity} from 'react-native'
import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';


const Discussion = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#D0E8F2'}}>
            <View style={{flex: 0.1,}}>
                <Text style={{ fontSize:25, padding: 10}} >Achmad Yanatun</Text>
            </View>

            <View style={{ flex: 10, borderRadius: 30, borderColor: '#000000'}}>
                <View style={{ height: 40 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.Pesanmasuk}>Kamu Udah Eek?</Text>                    
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.Pesankirim}>Kamu Udah Eek?</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.Pesankirim}>Kalau kamu?</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.Pesanmasuk}>Aku udah barusan</Text>                    
                </View>
            </View>
            
            <View style={{flexDirection: 'row', marginBottom: 10}}>
                <View style={styles.inputPesan}>
                    <TextInput
                        style={styles.textinput}
                        placeholder = 'Masukkan Pesan'
                        placeholderTextColor = "#01C5C4"
                    />
                </View>

                <TouchableOpacity style={styles.buttonchat}>
                    <Icon name='chevron-forward-outline' size={30} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>

    );

}

export default Discussion


