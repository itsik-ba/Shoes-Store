import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Women from './pages/Women';
import Man from './pages/Man';
import Admin from './pages/Admin';
import { globalStyle } from './pages/style/Style';




export default function App() {
   return (
    <SafeAreaView style={globalStyle.container}>
     <Text style={globalStyle.logo}>
        MY_SHOES
     </Text>

     <View style={globalStyle.navbar}>
       {[ 
      <Women key={1}/>,
      <Man key={2} />,
      <Admin key={3} />,
        ]}
     </View>
     
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


