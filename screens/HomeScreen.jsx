import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// Styles
import Styles from '../components/Styles';
import { useFonts } from 'expo-font';
// Components
import CardView from '../components/CardView';
import CardViewSquare from '../components/CardViewSquare';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'Light': require('../assets/fonts/Montserrat-Light.ttf'),
  });

  return (
    <View style={Styles.container}>
      {/* mainText */}
      <View style={Styles.maintxtView}>
        <Text style={{ ...Styles.header, fontFamily: 'ExtraBold' }}>Hello User,</Text>
        <Text style={{ ...Styles.subHeader, fontFamily: 'Light' }}>Good morning.</Text>
      </View>

      {/* content */}
      <ScrollView>
        {/* todayWorkoutPlan */}
        <View style={Styles.infoTextView}>
          <Text style={{ ...Styles.text, fontFamily: 'Medium' }}>Today Workout Plan</Text>
          <Text style={{ ...Styles.textColor, fontFamily: 'Medium' }}>Mon 26 Apr</Text>
        </View>
        {/* excerciseCard */}
        <View style={{ alignItems: 'center' }}>
          <CardView
            text='Day 01 - Warm Up'
            subtitle={'07:00 - 08:00 AM'}
            ImageSource={require('../images/00_image.jpg')}
            onPress={() => navigation.navigate('Workout')} />
        </View>

        {/* workoutCategories */}
        <View style={Styles.infoTextView}>
          <Text style={Styles.text}>Workout Categories</Text>
          <Text style={Styles.textColor} onPress={() => navigation.navigate('WCategories')}>See All</Text>
        </View>
        {/* categoriesCards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginRight: 20 }}>
          <CardView
            text='Learn the Basics of Training'
            subtitle={'06 Workouts for Beginner'}
            ImageSource={require('../images/begginer.jpg')}
            onPress={() => navigation.navigate('Workout')}
            style={{ marginLeft: 40 }} />
          <CardView
            text='Learn Mixed Martial Arts'
            subtitle={'+6 different disciplines'}
            ImageSource={require('../images/mma.jpg')}
            onPress={() => navigation.navigate('Workout')}
            style={{ marginLeft: 40 }} />

          <CardView
            text='Fitness life'
            subtitle={'Excercises for the day to day'}
            ImageSource={require('../images/everyday.jpg')}
            onPress={() => navigation.navigate('Workout')}
            style={{ marginLeft: 40 }} />
        </ScrollView>

        {/* newWorkouts */}
        <View style={Styles.infoTextView}>
          <Text style={Styles.text}>New Workouts</Text>
        </View>
        {/* newWorkoutsCards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginRight: 20, marginBottom:40 }}>
          <CardViewSquare
            text='Submissions'
            subtitle='03 lessons'
            ImageSource={require('../images/submission.jpg')}
            isPremium={true}
            onPress={() => navigation.navigate('Workout')} />

          <CardViewSquare
            text='Parkour basics'
            subtitle='02 lessons'
            ImageSource={require('../images/parkour.jpg')}
            isPremium={false}
            onPress={() => navigation.navigate('Workout')} />
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
