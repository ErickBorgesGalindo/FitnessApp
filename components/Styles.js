import { StyleSheet } from "react-native";
import {useFonts} from 'expo-font';



export default StyleSheet.create({
    // ViewStyles
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
    maintxtView: {
        paddingTop: 40,
        paddingLeft: 40,
        paddingBottom: 10
    },
    infoTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal:40
    },

    // TextStyles
    header: {
        fontSize: 50,
        fontWeight: 800,
        color: '#fff',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 300,
        color: '#fff'
    },
    text: {
        fontSize: 18,
        fontWeight: 500,
        color: '#fff'
    },

    textColor: {
        fontSize: 17,
        fontWeight: 300,
        color: '#D0FD3E'
    },
})