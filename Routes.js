import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import WorkoutDetail from './screens/WorkoutDetail';
import VideoScreen from './screens/VideoScreen';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='WorkoutDetail' component={WorkoutDetail} options={{ headerShown: false }}/>
            <Stack.Screen name='Video' component={VideoScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
