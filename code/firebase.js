import React from 'react';
import {Auth} from '@react-native-firebase/auth';

export const SignUpUser=(email, password) => {
  return new Promise(function(resolve, reject){
    Auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    resolve('Berhasil Mendaftar')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      reject('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      reject('That email address is invalid!');
    }

    console.error(error);
  });
  });
}