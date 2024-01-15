import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, TextInput, Button, Image  } from 'react-native';
import { styleAdmin } from './style/StyleAdmin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';



const Admin = () => {

const [shoes, setShoes] = useState([]);
const [name, setName] = useState("");
const [url, setUrl] = useState("");
const [price, setPrice] = useState("");

useEffect(()=>{
 
},[]);

 

// const handleGetAllItems = () =>{
//     try {
//     return (
//   <View style={styleAdmin.showList}>
//     {
//       womenShoes.map((data, index) =>(
//         <View style={styleAdmin.listContainer} key={index}>
//         <Text style={styleAdmin.listFonts}>{data.name}</Text>
//        <Image source={data.url} style={styleAdmin.image} />
//        <Text style={styleAdmin.listFonts}>{data.price}</Text>

//        <View style={styleAdmin.deleteUpdate}>
//         <TouchableOpacity onPress={handleUpadateItem}>
//        <Image source={require("../assets/update.png")} style={styleAdmin.icons}/>
//        </TouchableOpacity>

//        <TouchableOpacity onPress={handleDelete}>
//        <Image source={require("../assets/delete.png")} style={styleAdmin.icons}/>
//        </TouchableOpacity>
    
//        </View>
//       </View>
//       ))
//     }
     
// //    </View>  
// )


// } catch (error) {
//   console.error(error);
// }


// }


const handleAddItem  = async () =>{
try {
 const data = {
  name:name,
  url:url,
  price:price
 }
  
 const response = await axios.post("http://localhost:3000/api/view/createNewShoes", {data})
  console.log(response)
  console.log(data)
} catch (error) {
  console.error(error);
}
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
      onChangeText={(text) => setName(text)}
      value={name}
      />

      <TextInput
      style={styleAdmin.inputText}
      placeholder='Add Image'
      onChangeText={(text) => setUrl(text)}
      value={url}
      keyboardType='url'
      />

      <TextInput
      style={styleAdmin.inputText}
      placeholder='Add Price'
      onChangeText={(text) => setPrice(text)}
      value={price}
      keyboardType="numeric"
      />

      <View style={styleAdmin.button}>
      <Button title='Add-Item'
      onPress={handleAddItem} />
      </View>

     </View>

     <View style={styleAdmin.button}>
     {/* <Button 
      title='Get All Items'
      onPress={handleGetAllItems}/> */}
      </View>
</View> 
     
 
        
     </ScrollView> 
    </SafeAreaView>
   
  )
}

export default Admin