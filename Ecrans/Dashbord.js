
import { View, Text,StyleSheet,Image,Button} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


export default function Dashbord({navigation}) {
  return (
    <View style={styles.Container}>
      
    <View style={styles.Header}>
      
      <Text style={styles.text1}>Dashbord</Text>
      <TouchableOpacity  style={styles.Arrow} onPress={navigation.goBack}>
      <Image source={require('../assets/Arrow.png')} />
      </TouchableOpacity>
    </View>
    <View style={styles.center}>
    <TouchableOpacity style={styles.UserProfile} onPress={()=>{navigation.navigate("Profile")}}>
    <Image source={require('../assets/User.png')} />
    </TouchableOpacity>
    <Text style={styles.Data1}>User Name</Text>
    <Text style={styles.Data2}> Role </Text>
    </View>
    
    <View style={styles.Navig}>
    <TouchableOpacity  style={styles.element}><Text style={styles.TextB} onPress={()=>navigation.navigate("Pointage")}>Pointage</Text></TouchableOpacity>
    <TouchableOpacity  style={styles.element1}><Text style={styles.TextB}onPress={()=>alert("C'est Bon")}>Congé</Text></TouchableOpacity>
    <TouchableOpacity  style={styles.element2}><Text style={styles.TextB}onPress={()=>alert("C'est Bon")}>Groupe</Text></TouchableOpacity>
    <TouchableOpacity  style={styles.element3}><Text style={styles.TextB}onPress={()=>alert("C'est Bon")}>Congé</Text></TouchableOpacity>
    <TouchableOpacity  style={styles.element4}><Text style={styles.TextB}onPress={()=>alert("C'est Bon")}>Gestion</Text></TouchableOpacity>
   
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
      height:'40%',
      position:'absolute',
      top:120,
      left:'7%',
      zIndex:3,
      borderRadius:25,
      
       },
      Arrow:{
     
         marginTop:32,
         paddingTop:10,
         marginLeft:10,
         height:30,
         width:30,
         position:'absolute'


      },
      text1: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginLeft:130,
        marginTop:40
      },
      User:{
     
        marginTop:50,
        paddingTop:10,
        marginLeft:96,
        height:100,
        width:100,
        position:'absolute'

      },
      Data1: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginLeft:88,
        marginTop:160
      },
      Data2: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginLeft:114,
        marginTop:50
      },
      Navig:{
marginTop:200,
marginLeft:35,
width:'80%',
height:100,

paddingTop:0,
borderRadius:50
      },
      element:{
 marginTop:20,
 backgroundColor:"blue",
borderRadius:25,
height:70,
width:150
      },
      element1:{
        marginTop:20,
        backgroundColor:"blue",
       borderRadius:25,
       marginLeft:160,
       height:70,
       position:'absolute',
       width:145


      },
      element2:{
        marginTop:30,
        backgroundColor:"blue",
       borderRadius:25,
       marginLeft:160,
       height:70,
      
       width:145
      },
      element3:{
        marginTop:120,
        backgroundColor:"blue",
       borderRadius:25,
       marginLeft:0,
       position:'absolute',
       height:70,
       width:145
      },
      element4:{
        marginTop:200,
        backgroundColor:"blue",
       borderRadius:25,
       marginLeft:70,
       position:'absolute',
       height:70,
       width:145
      },
      TextB:{
      color:'white',
      paddingLeft:50,
      paddingTop:20

      },
      UserProfile:{
        position:"absolute",
        marginTop:10,
        marginLeft:70

      }

})