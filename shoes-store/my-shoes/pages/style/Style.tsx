import { StyleSheet } from "react-native";

 export const globalStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:50,
      padding:10,
     
    },
    logo:{
     color:'#f3452f',
     fontSize:30,
    },
    navbar: {
      padding:30,
      flexDirection:"row",
       gap:40,
        justifyContent:'center',
  
    },
    compStyle:{
      fontSize:22,
      color: "black",
      fontWeight: "bold",
   },
   card:{
    // margin: 5,
    // padding: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    
   },

   imageStyle:{
    width:200,
    height:200,
    marginBottom:80,
    
    
   }

  });