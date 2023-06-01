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
        marginHorizontal: 40
    },
    viewContainer: {
        position: 'absolute',
        top: '93%',
        width: '100%',
        height: 600,
        borderRadius: 25,
        backgroundColor: '#1C1C1E',
    },
    tabView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#2C2C2E',
        width: '91%',
        borderRadius: 20,
        height: 28,
        marginTop: 40,
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
    sectionName: {
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
        textTransform: 'uppercase'
    },

    // componentStyles
    topImage: {
        width: 400,
        height: 300,
    },
})