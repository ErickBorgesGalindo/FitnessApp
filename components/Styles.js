import { StyleSheet } from "react-native";
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
    viewContainer: {
        position: 'absolute',
        top: '93%',
        width: 390,
        height: 600,
        borderRadius: 25,
        backgroundColor: '#1C1C1E',
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

    description: {
        textAlign: 'justify',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 17,
        color: '#fff',
    },

    // componentStyles
    topImage: {
        width: 400,
        height: 300,
    },
})