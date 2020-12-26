import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeaderHai: {
        fontSize: 23,
        marginLeft: 10,
        marginTop: 10
    },
    textHeaderName: {
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    textProfileName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    picker: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    textQuestion: {
        fontSize: 25,
        marginLeft: 10,
    },
    imagelocation: {
        width: 20,
        height: 20,
        marginTop: 10
    },
    imagekategori: {
        width: 20,
        height: 20,
        marginTop: 10,
        marginLeft: 30
    },
    statusbukas:{
        width: 70,
        height: 20, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AEAA4E', 
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1
    },
    ambilbukas:{
        borderColor: '#000000',
        borderWidth: 1,
        width: 70,
        marginTop: 5,
        height: 30, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE4E4E', 
        borderRadius: 10
    },
    containerDashboard : {
        flex: 1,
    },
    containerProfil: {
        flex: 1,
        width : '100%',
        height: '10%',
        backgroundColor: '#fff'
    },
    flatdatabuku: {
        flex: 12,
        backgroundColor: '#D0E8F2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20
    },
    profilScreen:{
        width: "100%",
        height: "100%",
        backgroundColor: "#FEE2E2",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    columntambahbuku: {
        alignItems: 'center'
    },
    InputEmail: {
        borderColor: 'gray', 
        borderWidth: 2,
        width: "100%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#FFFAA4',        
    },
    ROw: {
        flexDirection: 'row'
    },
    rowtambahbuku: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    InputBukuJudul:{
        margin: 10
    },
    inputBuku: {
        flex: 7,
        backgroundColor: '#D0E8F2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textlocation: {
        marginLeft: 10, 
        fontSize: 20, 
        marginTop: 10
    },
    headerDashboard : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bodyDashboard: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    headerProfil:{
        width : '100%',
        height: '5%',
        backgroundColor: '#fff'
    },
    headerBuKas: {
        width : '100%',
        height: '20%',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    logosplashscreen :{
        width: 100,
        height: 100,
        marginBottom: 10
    },
    columnemaillogin : {
        flexDirection: 'column',
        width: "90%"
    },
    textsplashscreen :{
        fontSize: 40,
        color: '#01C5C4',
        fontWeight: 'bold'
    },
    containerLogin : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    daftarbuku: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
        width: "100%",
        backgroundColor: '#D0E8F2',
        marginTop: 20
    },
    logologinscreen :{
        width: 75,
        height: 75,
        marginRight: 10
    },
    textloginscreen :{
        fontSize: 35,
        color: '#01C5C4',
        fontWeight: 'bold',
    },
    authStyle : {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 10
    },
    textinput: {
        width: "100%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    InputBuku: {
        borderColor: 'gray', 
        borderWidth: 2,
        width: "100%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    DetailsBuku: {
        flex: 1,
        paddingLeft: 10,
        alignItems: 'center'
    },
    buttonbottom: {
        marginBottom: 10,
        backgroundColor:'#01C5C4',
        borderRadius:10,
        height: 40,
        width: "90%",
        justifyContent: 'center',
        position: 'absolute',
        bottom:0,
    },
    buttonbottomregist: {
        backgroundColor:'#01C5C4',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft:30,
        marginRight: 30,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    buttonbottomsavebuku: {
        backgroundColor:'#01C5C4',
        borderRadius:10,
        height: 40,
        marginHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 30
    },
    buttonbottomcamera: {
        backgroundColor:'#03fca5',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft: 15,
        marginRight: 15,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    submitButton:{
        color:'#fff',
        textAlign:'center',
        fontSize: 20,
    },
    submitFoto:{
        color:'#000000',
        textAlign:'center',
        fontSize: 20,
    },
    daftarlogin: {
        flexDirection: 'row',
        width: "100%",
        paddingTop: 20,
        justifyContent: 'center'
    },
    textonboarding: {
        fontSize: 30,
        color: '#153E90',
        fontWeight: 'bold'
    },
    textonboardingdesc: {
        fontSize: 20,
        color: '#153E90',
        textAlign: 'center'
    },
    text: {
        marginVertical: 2,
    },
    cameraButton: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: 130,
        borderColor: '#000',
        borderRadius: 10,
    },
    header: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        height: 140,
        width: 140,
        borderRadius: 30,
        marginTop: 25
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01C5C4',
        marginBottom: 10,
        width: 150,
        height: 40,
        borderRadius: 10
    },
    Pesanmasuk: {
        backgroundColor: '#01a4c5',
        marginLeft: 10,
        marginVertical: 5,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        color:'white',
    },
    Pesankirim: {
        backgroundColor: '#01C5C4',
        marginRight:10,
        marginVertical: 5,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        color:'white',
    },
    inputPesan: {
        flex: 8,
        marginLeft: 10,
        paddingRight: 5,
        justifyContent: 'flex-start'
    },
    buttonchat: {
        flex: 1,
        backgroundColor:'#01C5C4',
        marginRight: 10,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default style;