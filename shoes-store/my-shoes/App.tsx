import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image} from 'react-native';
import { globalStyle } from './pages/style/Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator()


import Women from './pages/Women';
import Man from './pages/Man';
import Cart from './pages/Cart';
import NavAdmin from './pages/NavAdmin';


const AdminButton = () => {
  const navigation = useNavigation();

  const handleAdmin = () => {
    try {
      navigation.navigate("NavAdmin");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <TouchableOpacity onPress={handleAdmin}>
      <Image source={require("./assets/admin.png")} />
    </TouchableOpacity>
  );
};


export default function App() {
  return (
<>
<NavigationContainer>
     <SafeAreaView style={globalStyle.container}>
     <Text style={globalStyle.logo}>
           MY_SHOES
         </Text>
         <GestureHandlerRootView>
          <AdminButton />
          </GestureHandlerRootView>
      
       <Stack.Navigator>
         <Stack.Screen name="Women" component={Women} />
         <Stack.Screen name="Man" component={Man} />
         <Stack.Screen name="Cart" component={Cart} />
         <Stack.Screen name="NavAdmin" component={NavAdmin} />
       </Stack.Navigator>
    
       <StatusBar style="auto" />
      </SafeAreaView>
  </NavigationContainer>  
  </>
  );
}


