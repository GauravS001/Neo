import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Search from './Search';
import New from './New';
import MySpace from './MySpace';
import SearchResults from './SearchResults';
import Watch from './Watch';
import Details from './Details';

const Stack = createStackNavigator();

function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search}  options={{ headerShown: false }}/>
        <Stack.Screen name="New" component={New}  options={{ headerShown: false }}/>
        <Stack.Screen name="MySpace" component={MySpace}  options={{ headerShown: false }}/>
        <Stack.Screen name="SearchResults" component={SearchResults}  options={{ headerShown: false }}/>
        <Stack.Screen name="Watch" component={Watch}  options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={Details}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;