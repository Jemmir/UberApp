import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { colors, parameters } from '../global/styles'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { mapStyle } from '../global/mapStyle'
import MapComponent from '../components/MapComponent'



export default function RequestScreen() {
  return (
    <View style={styles.container}>
      <MapComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:parameters.statusBarHeight
  },
 

})