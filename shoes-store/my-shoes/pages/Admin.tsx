import React from 'react'
import { Text, View } from 'react-native';
import { globalStyle } from './style/Style';
import { SafeAreaView } from 'react-native-safe-area-context';


const Admin = () => {
  return (

    <SafeAreaView>
      <View>
     <Text style={globalStyle.compStyle}>Admin</Text>
     </View>
    </SafeAreaView>
   
  )
}

export default Admin