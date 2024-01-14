import { SafeAreaView, View, Text, Image, Button, TextInput } from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { globalStyle } from './style/Style';


type RootStackParamList = {
  Cart: { name: string; url: any; price: string; quantity: number };
};

type CartScreenRouteProp = RouteProp<RootStackParamList, 'Cart'>;

const Cart: React.FC<{
  route: CartScreenRouteProp;
}> = ({ route }) => {
  const { name, url, price } = route.params;

  return (
    <View style={globalStyle.card2}>
       <Text style={globalStyle.cardText}>{name}</Text>
      <Image source={url} style={globalStyle.imageStyle} />
      <Text style={globalStyle.cardText}>{price}</Text>
      <TextInput
        style={globalStyle.input}
        keyboardType="numeric"
        value={quantity.toString()}
        onChangeText={(text) => setQuantity(parseInt(text, 10) || 0)}
      />
      <Button title='Buy' />
      
    </View>
  );
};


export default Cart