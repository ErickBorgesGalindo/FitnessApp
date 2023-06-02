import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import WorkoutDetail from './screens/WorkoutDetail';
import WorkoutCategories from './screens/WorkoutCategories';
import VideoScreen from './screens/VideoScreen';
import TrainersList from './screens/TrainersList';
import TrainersDetail from './screens/TrainersDetail';
import TrainersReviews from './screens/TrainersReviews';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='WorkoutDetail' component={WorkoutDetail} options={{ headerShown: false }}/>
            <Stack.Screen name='WorkoutCategories' component={WorkoutCategories} options={{ headerShown: false }}/>
            <Stack.Screen name='Video' component={VideoScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='TrainersList' component={TrainersList} options={{ headerShown: false }}/>
            <Stack.Screen name='TrainerDetail' component={TrainersDetail} options={{ headerShown: false }}/>
            <Stack.Screen name='TrainerReviews' component={TrainersReviews} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
