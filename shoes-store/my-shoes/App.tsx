import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text} from 'react-native';
import { globalStyle } from './pages/style/Style';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Admin from './pages/Admin'
import Women from './pages/Women';
import Man from './pages/Man';

const Stack = createNativeStackNavigator()



export default function App() {
   return (


    <>
     <SafeAreaView style={globalStyle.container}>
     <Text style={globalStyle.logo}>
           MY_SHOES
         </Text>
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Women" component={Women} />
         <Stack.Screen name="Man" component={Man} />
         <Stack.Screen name="Admin" component={Admin} />
       </Stack.Navigator>
     </NavigationContainer>
       <StatusBar style="auto" />
  </SafeAreaView></>
  );
}


