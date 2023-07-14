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
import TrainerWriteReview from './screens/TrainerWriteReview';
import TrainerAppoinment from './screens/TrainerAppoinment';
import PaymentTime from './screens/PaymentTime';
import PaymentMethod from './screens/PaymentMethod';
import PaymentCardDetail from './screens/PaymentCardDetail';
import PaymentComplete from './screens/PaymentComplete';
import Login from './screens/Login';
import LoginForgotPassowrd from './screens/LoginForgotPassword';
import LoginVerification from './screens/LoginVerification';
import UserGender from './screens/UserGender';
import UserAge from './screens/UserAge';
import UserWeight from './screens/UserWeight';
import UserGoal from './screens/UserGoal';
import UserLevel from './screens/UserLevel';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPassword' component={LoginForgotPassowrd} options={{ headerShown: false }} />
        <Stack.Screen name='Verification' component={LoginVerification} options={{ headerShown: false }} />
        <Stack.Screen name='Gender' component={UserGender} options={{ headerShown: false }} />
        <Stack.Screen name='Age' component={UserAge} options={{ headerShown: false }} />
        <Stack.Screen name='Weight' component={UserWeight} options={{ headerShown: false }} />
        <Stack.Screen name='Goal' component={UserGoal} options={{ headerShown: false }} />
        <Stack.Screen name='Level' component={UserLevel} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='WorkoutDetail' component={WorkoutDetail} options={{ headerShown: false }} />
        <Stack.Screen name='WorkoutCategories' component={WorkoutCategories} options={{ headerShown: false }} />
        <Stack.Screen name='Video' component={VideoScreen} options={{ headerShown: false }} />
        <Stack.Screen name='TrainersList' component={TrainersList} options={{ headerShown: false }} />
        <Stack.Screen name='TrainerDetail' component={TrainersDetail} options={{ headerShown: false }} />
        <Stack.Screen name='TrainerReviews' component={TrainersReviews} options={{ headerShown: false }} />
        <Stack.Screen name='WriteReview' component={TrainerWriteReview} options={{ headerShown: false }} />
        <Stack.Screen name='Appoinment' component={TrainerAppoinment} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentTime' component={PaymentTime} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentCardDetail' component={PaymentCardDetail} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentComplete' component={PaymentComplete} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
