import React, { useState } from 'react'
import { Image , ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from './style/Style';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Cart: undefined;
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


const handleClick = (women) =>{
  console.log(women)
  navigation.navigate('Cart')
 

}


return (
  <ScrollView>
     <View>
      {
        womenShoes.map((women, index)=>(
          <TouchableOpacity
          style={globalStyle.card}
          key={index}
          onPress={()=> handleClick(women)}
          >
          <Text style={globalStyle.cardText}>{women.name}</Text>
        <Image 
        key={index}
        source={women.url}
        style={globalStyle.imageStyle}
        />
        <Text 
        style={globalStyle.cardText}>{women.price}</Text>
          </TouchableOpacity>
        ))}
     </View>
     </ScrollView>
  )
}

export default Women