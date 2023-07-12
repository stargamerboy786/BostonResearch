import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../MyProject/Screens/Splash/SplashSceen';
import LoginScreen from '../MyProject/Screens/Login/LoginScreen';
import SwiperFile from './Screens/OnBoardingScreen/SwiperFile';
import Dashboard from './Screens/Dashboard/Dashboard';
import ViewFile from './Screens/Dashboard/ViewFile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SwiperFile" component={SwiperFile} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
