import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackLayout} from './code/StackLayout';
import {LogBox} from 'react-native';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCcBqT_E73rPoFWSwtmMXe9IjHSuPNPdsA",
    authDomain: "bukas-528ac.firebaseapp.com",
    databaseURL: "https://bukas-528ac-default-rtdb.firebaseio.com/",
    projectId: "bukas-528ac",
    storageBucket: "bukas-528ac.appspot.com",
    messagingSenderId: "1095927580986",
    appId: "1:1095927580986:web:4630bffc963a4054da6803",
    measurementId: "G-EQSB7BGTVX"
  };
  if(!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig);
  }
const App = () => {
  React.useEffect(()=>{
    LogBox.ignoreAllLogs();
},[])
  return (
    <NavigationContainer>
      <StackLayout />
    </NavigationContainer>
  );
  }

export default App;
