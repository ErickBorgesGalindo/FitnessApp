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
    dataView: {
        height: 100,
        width: 340,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#3A3A3C',
    },
    addCardView: {
        justifyContent: 'center',
        height: 130,
        width: 80,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
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
    textSmall: {
        fontSize: 17,
        fontWeight: 300,
        color: '#FFF'
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
    input: {
        height: 60,
        width: 350,
        alignSelf: 'center',
        marginBottom: 10,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderTopColor: '#1C1C1E',
        borderLeftColor: '#1C1C1E',
        borderRightColor: '#1C1C1E',
        borderWidth: 1,
    },
    inputReview: {
        height: 235,
        width: 320,
        alignSelf: 'center',
        marginBottom: 30,
        color: 'white',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#2C2C2E',
        backgroundColor: '#2C2C2E',
        borderRadius: 20,
        padding:20,
        paddingTop:20
      },
    cellIcon: {
        width: 54,
        height: 54,
        borderRadius: 50,
        marginTop: 17,
        marginRight: 40,
        backgroundColor: '#D0FD3E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    circleTrainerimage: {
        height: 60,
        width: 60,
        marginLeft: 20,
        borderRadius: 50
    }
})