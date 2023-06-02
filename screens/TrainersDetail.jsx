import { StyleSheet, View, Text, Image, Pressable, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
//Styles
import Styles from '../components/Styles';
import { Ionicons } from '@expo/vector-icons';
//Components
import BackBtn from '../components/BackBtn';
import CustomBtn from '../components/CustomBtn';
import Review from '../components/ReviewView';

const TrainersDetail = () => {
    const navigation = useNavigation();
    const handleCall = () => {
        print('Call')
    };

    return (
        <View>
            {/* topImage */}
            <Image style={Styles.topImage} source={require('../images/trainer.jpg')} />
            {/* Back icon */}
            <BackBtn onPress={() => navigation.goBack()} style={{ top: '15%' }} />

            <View style={Styles.viewContainer}>
                {/* title and call */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'col' }}>
                        <Text style={{ ...Styles.text, fontSize: 30, marginTop: 17, marginLeft: 30, }}>Richard Will</Text>
                        <Text style={{ ...Styles.textColor, marginTop: 8, marginLeft: 30 }}>Functional Strength</Text>
                    </View>
                    <Pressable style={Styles.cellIcon} onPress={handleCall}>
                        <Ionicons name="call" size={24} color="#1C1C1E" />
                    </Pressable>
                </View>

                {/* trainerMeassures */}
                <View style={Styles.dataView}>
                    {/* Experience */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ ...Styles.text, fontSize: 30 }}>6</Text>
                            <Text style={{ color: 'white' }}>Experience</Text>
                        </View>
                        <View style={{ height: 65, marginLeft: 10, marginRight: 10, borderLeftColor: 'rgba(255,255,255,0.2)', borderLeftWidth: 1 }} />
                        {/* Participations */}
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ ...Styles.text, fontSize: 30 }}>46</Text>
                            <Text style={{ color: 'white' }}>Participations</Text>
                        </View>
                        <View style={{ height: 65, marginLeft: 10, marginRight: 10, borderLeftColor: 'rgba(255,255,255,0.2)', borderLeftWidth: 1 }} />
                        {/* Active Clients */}
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ ...Styles.text, fontSize: 30 }}>25</Text>
                            <Text style={{ color: 'white' }}>Active Clients</Text>
                        </View>
                    </View>
                </View>

                {/* reviews and calification*/}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ ...Styles.text, marginLeft: '6%', marginTop: 10 }}> Reviews </Text>
                    <View style={{ height: 20, width: 50, borderRadius: 5, marginTop: 14, marginRight: 30, backgroundColor: '#D0FD3E', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>4.6</Text>
                    </View>
                </View>

                {/* reviewsIcons */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginLeft: '7%', marginTop: 20 }}>
                        <Image source={require('../images/trainer.jpg')} style={[Styles.circleImage, { zIndex: 5 }]} />
                        <Image source={require('../images/everyday.jpg')} style={[Styles.circleImage, { zIndex: 4, left: 25 }]} />
                        <Image source={require('../images/submission.jpg')} style={[Styles.circleImage, { zIndex: 3, left: 50 }]} />
                        <Image source={require('../images/trainer.jpg')} style={[Styles.circleImage, { zIndex: 2, left: 75 }]} />
                        {/* reviewsNumber */}
                        <View style={{ width: 40, height: 40, backgroundColor: '#D0FD3E', borderRadius: 50, zIndex: 1, left: 110, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>174</Text>
                        </View>
                    </View>
                    <Pressable style={{ marginTop: 30, marginRight: 30 }} onPress={() => console.log('Pucharrado')}>
                        <Text style={Styles.textColor}>Read all reviews</Text>
                    </Pressable>
                </View>

                {/* ReviewText */}
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={330} snapToAlignment={'center'} style={{ alignSelf: 'center' }}>
                        <Review user={'Nayely Morales'} time={'2'} image={require('../images/trainer.jpg')} review={'Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.'} />
                        <Review user={'Nayely Morales'} time={'2'} image={require('../images/trainer.jpg')} review={'Had such an amazing session with Maria.'} />
                        <Review user={'Nayely Morales'} time={'2'} image={require('../images/trainer.jpg')} review={'Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.'} />
                    </ScrollView>
                </View>
            </View>

            {/* Button */}
            <View style={{ top: '160%' }}>
                <CustomBtn title='Book an Appoinment' onPress={() => navigation.navigate('Reviews')} />
            </View>
        </View>
    )
}

export default TrainersDetail