import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
    Container:{
        // borderWidth:2,
        borderColor:'#ddd',
        padding:2,
        backgroundColor:'#C5F7F7',
        width:300,
        alignSelf:'center',
        elevation:20,
        borderRadius:15,
        marginTop:20
      },
      Heading:{
        color:'white',
        fontSize:25,
        padding:10,
        backgroundColor:'black',
        textAlign:'center',
        fontWeight:'bold'
      },
      InputRow:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
      },
      ButtonStyle:{
        margin:10,
        marginHorizontal:20,
      },
      BMIIntro:{
        fontSize:20,fontWeight:'bold',textDecorationLine:'underline', color:'black'
      },
      imagecontainer:{
        alignItems:'center',
        elevation:20,
        shadowColor:'green',
        shadowOffset:{width:10, height:10},
        
      },
      image1: {
        width: 260,
        height: 150,
        marginVertical:10,
        borderTopRightRadius:10,
      },
      image2: {
        width: 280,
        height: 230,
        marginVertical:10
      },
      TouchableOpacityButton:{
        backgroundColor:'#68b2a0',
        padding:5,
        borderWidth:1.5,
        borderRadius:5,
        height:55,
        margin:10,
        marginHorizontal:18,
        justifyContent:'center',
        alignItems:'center',
        elevation:15
      }
});

export const darkStyles = StyleSheet.create({
    Container:{
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'white',
        padding:2,
        backgroundColor:'#60736F',
        width:300,
        alignSelf:'center',
        elevation:25,
        borderRadius:15,
        marginTop:20,
        shadowColor:'white',
      },
      Heading:{
        color:'white',
        fontSize:25,
        padding:10,
        backgroundColor:'black',
        textAlign:'center',
        fontWeight:'bold'
      },
      InputRow:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
      },
      ButtonStyle:{
        margin:10,
        marginHorizontal:20,
      },
      BMIIntro:{
        fontSize:20,fontWeight:'bold',textDecorationLine:'underline', color:'white'
      },
      imagecontainer:{
        alignItems:'center',
        elevation:25,
      },
      image1: {
        width: 260,
        height: 150,
        marginVertical:10,
        borderTopRightRadius:10,
      },
      image2: {
        width: 280,
        height: 230,
        marginVertical:10
      },
      TouchableOpacityButton:{
        backgroundColor:'#68b2a0',
        padding:5,
        borderWidth:1.5,
        borderRadius:5,
        height:55,
        margin:10,
        marginHorizontal:18,
        justifyContent:'center',
        alignItems:'center',
        elevation:15
      }
});