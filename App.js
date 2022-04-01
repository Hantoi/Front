import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Ecrans/Login'
import Dashbord from './Ecrans/Dashbord'
import Pointage from './Ecrans/Pointage'
import Profile from './Ecrans/Profile'
import 'react-native-gesture-handler'
const Stack=createStackNavigator()

const App = () => {
  return (
 <NavigationContainer>

   <Stack.Navigator initialRouteName='Login'
   screenOptions={{headerShown:false}}>
 <Stack.Screen name="login" component={Login}/>
 <Stack.Screen name="Dashbord" component={Dashbord}/>
 <Stack.Screen name="Pointage" component={Pointage}/>
 <Stack.Screen name="Profile" component={Profile}/>
   </Stack.Navigator>
 </NavigationContainer>
  )
}

export default App