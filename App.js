import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = ({navigation}) =>{
  return (
    <>
      <View>
        <Text>Login</Text>
        <TextInput placeholder='Enter Username'/>
        <TextInput placeholder='Enter PassWord'/>
        <Button 
          title = "Login"
          onPress={()=> navigation.navigate("Details")}/>
      </View>
      <View>
        <Text style={{color:'black'}}>Don't have account? Sign Up</Text>
      </View>
    </>
  );
};

const DetailsScreen = ({navigation}) =>{
  return (
    <>
      <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to details screen again..."
          onPress={()=>navigation.push("Details")}/>
          <Button
          title="Go to Home"
          onPress={()=>navigation.navigate("Home")}/>
           <Button
          title="Go back"
          onPress={()=>navigation.goBack()}/>
           <Button
          title="Go to first Page"
          onPress={()=>navigation.popToTop()}/>
      </View>
    </>
  );
};


const Stack = createStackNavigator();

const App= ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title:'Sign in'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
