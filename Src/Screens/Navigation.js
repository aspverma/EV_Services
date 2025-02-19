import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import OnbordingScreen from './OnbordingScreen';
import ChargingStationFinder from './ChargingStationFinder'
import HomeScreen from './HomeScreen';
import UpdateProfileScreen from './UpdateProfileScreen'
import ProfileScreen from './ProfileScreen'
const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnbordingScreen" component={OnbordingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="ChargingStationFinder" component={ChargingStationFinder} />
        <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})