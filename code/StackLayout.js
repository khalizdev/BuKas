import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrasiScreen';
import OnBoardingSatu from './OnBoardingSatu';
import OnBoardingKedua from './OnBoardingKedua';
import ButtomTabBuKas from './BottomTab';
import DetailsScreen from './details';
import Discussion from './Discussion';

const Stack = createStackNavigator();
const StackLayout = () => {
    return(
      <Stack.Navigator>
          <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name= "RegistrationScreen"
            component = {RegistrationScreen}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "OnBoardingSatu"
            component = {OnBoardingSatu}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "OnBoardingKedua"
            component = {OnBoardingKedua}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "ButtomTabBuKas"
            component = {ButtomTabBuKas}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "DetailsScreen"
            component = {DetailsScreen}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "Discussion"
            component = {Discussion}
            options ={{headerShown: false}}
          />
      </Stack.Navigator>
    );
}

export {StackLayout};