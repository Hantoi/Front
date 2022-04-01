import React from 'react'
import { StyleSheet } from 'react-native'
import { ImageBackground } from 'react-native'
import { View } from 'react-native-web'
import couleur from '../Couleur/CoulourUtilisés'


function Background() {
  return (
   <View styles={styles.container}>

   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    backgroundColor:"black",
    height:"50%",
    
}})
export default Background