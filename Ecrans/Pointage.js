import { View, Text,StyleSheet ,TouchableOpacity,Image,Switch} from 'react-native'


import React,{useState} from 'react'

export default function Pointage({navigation}) {
   const [show,setshow]=useState()

  return (
    <View style={styles.Container}>
      
    <View style={styles.Header}>
    <Text style={styles.text1}>Pointage</Text>
      <TouchableOpacity  style={styles.Arrow} onPress={navigation.goBack}>
      <Image source={require('../assets/Arrow.png')} />
      </TouchableOpacity>
    </View>
    <View style={styles.center}>
       {
                    show === true     ?       <TouchableOpacity style={styles.Entré} onPress={()=>{setshow(false)}}><Text style={styles.EntréButton}>Entrer</Text></TouchableOpacity> : 
                                  <TouchableOpacity style={styles.Sortie} onPress={()=>{setshow(true)
                                 }} ><Text style={styles.sortieButton}>Sortie</Text></TouchableOpacity>
       }
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
        height:100,
        
        
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
             Arrow:{
                   marginTop:32,
         paddingTop:10,
         marginLeft:10,
         height:30,
         width:30,
         position:'absolute'
             },
             text1:{
                fontSize: 20,
                lineHeight: 21,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: 'white',
                marginLeft:130,
                marginTop:40

             },
             Entré:{
         
                backgroundColor:"green",
                borderRadius:25,
                marginTop:200,
                width:200,
                height:150,
                marginLeft:40,
                marginTop:200,

             },
             EntréButton:{
          
                fontSize: 20,
                lineHeight: 21,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: 'white',
                marginLeft:70,
                marginTop:60
              },
              Sortie:{
          
               backgroundColor:"red",
                borderRadius:25,
                marginTop:200,
                width:200,
                height:150,
                marginLeft:40,
                marginTop:200,

             },
             sortieButton:{

               
               fontSize: 20,
               lineHeight: 21,
               fontWeight: 'bold',
               letterSpacing: 0.25,
               color: 'white',
               marginLeft:70,
               marginTop:60
             }
             

})