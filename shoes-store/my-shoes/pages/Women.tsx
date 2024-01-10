import React from 'react'
import { Image , ScrollView, View, Text } from 'react-native';
import { globalStyle } from './style/Style';

const Women = () => {

  const womenShoes = [
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
];


return (
  <ScrollView>
     <View>
      {
        womenShoes.map((women, index)=>(
          <View style={globalStyle.card}>
          <Text>{women.name}</Text>
        <Image 
        key={index}
        source={women.url}
        style={globalStyle.imageStyle}
        />
        <Text>{women.price}</Text>
          </View>
        ))}
     </View>
     </ScrollView>
  )
}

export default Women