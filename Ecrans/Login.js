import { StyleSheet, Text, View,Button,Pressable} from 'react-native'
import React from 'react'
import couleur from '../Couleur/CoulourUtilisés'
import PullToRefreshViewNativeComponent from 'react-native/Libraries/Components/RefreshControl/PullToRefreshViewNativeComponent'
import Background from '../Componentes/Background'
import { TextInput } from 'react-native'
 import {useState} from 'react'
import { TouchableOpacity } from 'react-native'



const Login = ({navigation}) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  
  return (
    <View style={styles.Container}>
      
       <View style={styles.Header}></View>
       <View style={styles.center}>
       <Text style={styles.Text} onChan>login</Text>
       <TextInput style={styles.Input} placeholder="email" />
       <TextInput  style={styles.Input} placeholder="password"/>
       <TouchableOpacity style={styles.T55} onPress={()=>{navigation.navigate("Dashbord")}}>
         <Text style={styles.text1}>
       Envoyer
         </Text>
       </TouchableOpacity>
       </View>
       
    </View>
  
     
    
 )
}
const styles = StyleSheet.create({

 Container:{

  marginTop: 0,
    backgroundColor:"#FFFFFF",
    height:"100%",
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
 },

 Header:{
marginTop:0,
backgroundColor:"blue",
height:250,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,

 },
 center:{
backgroundColor:'#f8f8ff',
marginLeft:12,
marginRight:30,
width:'80%',
height:'80%',
position:'absolute',
top:120,
left:'7%',
zIndex:3,
borderRadius:25,

 },

  Input: {
    height: 40,
    margin: 12,
    borderWidth:1,
    borderTopColor:'#f8f8ff',
    borderRightColor:'#f8f8ff',
    borderLeftColor:'#f8f8ff',
    marginTop:100,
    padding: 10,
  },
  Text:{
    marginLeft:102,
    marginTop:30,
    fontSize:25
  },
  T55:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop:50
,    borderRadius: 25,
    elevation:3 ,

    marginLeft:40,
    width:200,
    backgroundColor: 'blue'
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

})

export default Login

