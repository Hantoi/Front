import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'


const Profile = ({navigation}) => {
  return (
    <View style={styles.Container}>
      
      <View style={styles.Header}> 
          <Text style={styles.text1}>Dashbord</Text>
          <TouchableOpacity  style={styles.Arrow} onPress={navigation.goBack} >
          <Image source={require('../assets/Arrow.png')} />
          </TouchableOpacity>
       </View>

       <View style={styles.center}>
           <TouchableOpacity style={styles.UserProfile} >
           <Image source={require('../assets/User.png')} />
           </TouchableOpacity>
           <Text style={styles.Data1}>User Name</Text>
           <Text style={styles.Data2}> Role </Text>
           <View style={{ borderBottomColor: 'black',borderBottomColor: 'black',borderBottomWidth: 1,width:200,marginLeft:50}}/>
           <Text style={styles.Description}>Description</Text>
    </View>
   

   
   <View style={styles.Bottom}>
   <Image source={require('../assets/Phone1.png')} style={{width:40,height:40,marginTop:9,marginLeft:25}}/>
   <Text style={{position:"absolute",marginLeft:100,marginTop:20}}>Téliphone</Text>
   <Image source={require('../assets/Email.png')} style={{width:40,height:40,marginLeft:25}}/>
   <Text style={{position:"absolute",marginLeft:100,marginTop:60}}>Email</Text>
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
      height:'55%',
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
        marginTop:20
      },
      Data2: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginLeft:114,
        marginTop:50,
        marginBottom:15
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
      Bottom:{

        backgroundColor:'black',
        marginTop:300,
        width:"80%",
        marginLeft:33,
      marginRight:10,
      borderRadius:25,
      height:100,
      backgroundColor:'#f8f8ff',
        },
      UserProfile:{
        marginTop:10,
        marginLeft:70,
        
      },
      Description:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginLeft:80,
        marginTop:50
      }

})

export default Profile