import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const LotsOfstyle=()=>{
  return(
    <View style={styles.container}>
      <Text style={{color:'green'}}>Hello</Text>
      <Text style={styles.BigBlue}>Big blue</Text>
      <Text style={{color:'red'}}>Big blue and Big too</Text>
      <Text style={{color:'black',fontSize:35,fontWeight:'300'}}>Big too and Big bike</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginTop:50,
    alignItems:'center',
  },
  BigBlue:{
   color:'blue',fontSize:30,fontWeight:'300' 
  }
})
export default LotsOfstyle