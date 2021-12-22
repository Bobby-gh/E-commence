import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';


const image = { uri: "https://th.bing.com/th/id/R.baf567151d539ef82af9accda92a4a67?rik=IhsntoKiXIfupw&riu=http%3a%2f%2fcdnimg.webstaurantstore.com%2fimages%2fproducts%2fmain%2f632%2f3814%2fsupermarket-grocery-shopping-cart.jpg&ehk=YzOiW9aOzwzjcJB2fswlDpkebJd0AyxjZeipo76Dln0%3d&risl=&pid=ImgRaw&r=0" };


const Login = ({navigation}) => {
  return (
    <SafeAreaView
     style={styles.container}>
     <ImageBackground
          source={image}    
          resizeMode="cover"
           style={styles.image}>
            <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.red}}>Welcome To  Planet Online</Text>
           <Text style={{fontSize: 17, fontWeight: "bold", alignItems: "center",justifyContent: "center", color: COLORS.black}}>Your Best Online Planting Shop</Text>
        </View>
          <Text style={{paddingTop:180,}}></Text>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               />
            
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}
               />
          <Text style={{paddingTop: 10,}}></Text>     
          <TouchableOpacity style={styles.button} 
          onPress={() => navigation.navigate('HomeScreen')}>
              <Text>Login</Text>
          </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity>
        <Text style={{color:"white", backgroundColor:"grey", alignItems:"center",}}>Forget Password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"#ee7b1a",alignItems:"center"}} >
        <Text style={{color:"white"}}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
      flex: 1,
    },
    headerText: {
      color: "#ee7b1a",
      fontSize: 15,
      fontWeight: "bold",
    },
   image: {
    flex:1,
    alignItems: "center",
    paddingTop:20,
    justifyContents: "row",
   },
    button:{
      backgroundColor: "#ee7b1a",
      borderRadius: 10,
      alignItems: "center",
      paddingVertical:12,
      paddingHorizontal: 60,
      
    },
     input: {
      margin: 13,
      height: 50,
      width:300,
      borderColor: '#7a42f4',
      backgroundColor: "white",
      borderRadius: 5,
    }, 
     
  });
  export default Login;