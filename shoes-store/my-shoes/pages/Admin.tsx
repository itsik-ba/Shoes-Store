import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, TextInput, Button, Image  } from 'react-native';
import { styleAdmin } from './style/StyleAdmin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';




const Admin = () => {

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

 

const handleGetAllItems = () =>{
    
try {
   console.log("first") 
} catch (error) {
  console.error(error);
}

return (
  <View style={styleAdmin.showList}>
    {
      womenShoes.map((data, index) =>(
        <View style={styleAdmin.listContainer} key={index}>
        <Text style={styleAdmin.listFonts}>{data.name}</Text>
       <Image source={data.url} style={styleAdmin.image} />
       <Text style={styleAdmin.listFonts}>{data.price}</Text>

       <View style={styleAdmin.deleteUpdate}>
        <TouchableOpacity onPress={handleUpadateItem}>
       <Image source={require("../assets/update.png")} style={styleAdmin.icons}/>
       </TouchableOpacity>

       <TouchableOpacity onPress={handleDelete}>
       <Image source={require("../assets/delete.png")} style={styleAdmin.icons}/>
       </TouchableOpacity>
    
       </View>
      </View>
      ))
    }
     
   </View>  
)
}
 
const handleAddItem = () =>{

}

const handleDelete = () =>{

}

const handleUpadateItem = () =>{

}

  return (
<SafeAreaView>

      <ScrollView>
      <View style={styleAdmin.container}>
       <Text style={styleAdmin.header}>admin bar </Text>
     
        
     <View style={styleAdmin.container}>
     
      <TextInput
      style={styleAdmin.inputText}
      placeholder='Add Name'
      />

      <TextInput
      style={styleAdmin.inputText}
      placeholder='Add Image'
      />

      <TextInput
      style={styleAdmin.inputText}
      placeholder='Add Price'
      />

      <View style={styleAdmin.button}>
      <Button title='Add-Item'
      onPress={handleAddItem} />
      </View>

     </View>

     <View style={styleAdmin.button}>
     <Button 
      title='Get All Items'
      onPress={handleGetAllItems}/>
      </View>
</View> 
     
 
        
     </ScrollView> 
    </SafeAreaView>
   
  )
}

export default Admin