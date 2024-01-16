import React, { useState } from 'react'
import { Image , ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from './style/Style';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Cart: { name: string; url: any; price: string };
  };

  type WomenShoe = {
    name: string;
    url: any; 
    price: string;
  };
  

type ProfileScreenNavigationProp = NavigationProp<RootStackParamList, 'Cart'>;

const Women = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const [womenShoes, setWomenShoes] = useState([
    {
     name:"Black_Heels", 
     url:require("../assets/women/black_akev.png"),
     price:"68$"
    },
    {
     name:"Black_Heels", 
     url:require("../assets/women/blue_akev.png"),
     price:"68$"
    },
    {
     name:"Black_Heels", 
     url:require("../assets/women/gold_akev.png"),
     price:"68$"
    },
    {
     name:"Black_Heels", 
     url:require("../assets/women/pink_akev.png"),
     price:"68$"
    },
    {
     name:"Black_Heels", 
     url: require("../assets/women/sport_pink.png"),
     price:"68$"
    },
    {
     name:"Black_Heels", 
     url:require("../assets/women/sport_white.png"),
     price:"68$"
    },
]);



const handleClick = (data: WomenShoe) =>{
  console.log(data)
  navigation.navigate('Cart', { name: data.name, url: data.url, price: data.price });
 

}


return (
  <ScrollView>
     <View style={globalStyle.container}>
      {
        womenShoes.map((data, index)=>(
          <TouchableOpacity
          style={globalStyle.card}
          key={index}
          onPress={()=> handleClick(data)}
          >
          <Text style={globalStyle.cardText}>{data.name}</Text>
        <Image 
        key={index}
        source={data.url}
        style={globalStyle.imageStyle}
        />
        <Text 
        style={globalStyle.cardText}>{data.price}</Text>
          </TouchableOpacity>
        ))}
     </View>
     </ScrollView>
  )
}

export default Women