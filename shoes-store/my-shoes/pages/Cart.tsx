import { SafeAreaView, View, Text, Image } from 'react-native'
import { globalStyle } from './style/Style'
import { useEffect, useState } from 'react'

interface CartItem {
  id: number;
  name: string;
  url: any;
  price: number;
}

interface CartProps {
  selectedItem: CartItem;
}


const Cart: React.FC<CartProps> = ({selectedItem}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
   console.log(cartItems);
  useEffect(() => {
    if (selectedItem) {
       setCartItems((prevItems) => [...prevItems, selectedItem]);
    }
  }, [selectedItem]);



  return (
    <SafeAreaView>
    <View style={globalStyle.card}>
    
      {cartItems.map((item, index) => (
        <><Text key={index} style={globalStyle.cardText}> {item.name} </Text>
        <Image 
        key={index}
        source={item.url}
        style={globalStyle.imageStyle}
        />
          <Text 
        style={globalStyle.cardText}>{item.price}</Text>
        </>    
      ))}
   </View>
  </SafeAreaView>
  )
}

export default Cart