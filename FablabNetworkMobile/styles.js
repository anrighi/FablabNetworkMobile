import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({

    login_container: {
        margin:100,
    },

    cardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    coverContainer: {
        position: 'relative',
    },
    coverImage: {
        height: Dimensions.get('window').width * (4 / 9),
        width: Dimensions.get('window').width,
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    scroll: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    productRow: {
        margin: 25,
    },
    mainviewStyle: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
    },
    coverMetaContainer: {
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 15,
        // marginRight: 15,
    },
    footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#F64A25',
        flexDirection: 'row',
        height: 65,
        alignItems: 'center',
    },
    buttonFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    navigatorButton: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
    },
    navigatorText: {
        color: '#08ff00',
        fontWeight: 'bold',
        alignItems: 'flex-start',
        justifyContent: 'center',

        fontSize: 16,
    },
    borderCenter: {
        height: 55,
        borderWidth: 0.5,
        borderColor: '#FFA890',
    },
    textFooter: {
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 18,
    },
    priceText: {
        marginBottom: 5,
        letterSpacing: 1,

        color: '#000000',
        fontSize: 36,
        fontWeight: '400',
    },
    detailText: {
        marginBottom: 4,
        color: '#000000',
        fontSize: 22,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    subDetailText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '100',
        lineHeight: 28,
        letterSpacing: 0.5,
    },
    descriptionText: {
        marginBottom: 4,
        color: '#828282',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 1,
    },
    containerMachine: {
        flex: 1,
        marginTop: 20,
    },
    productImg: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold'
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
        color: "#696969",
    },
    star: {
        width: 40,
        height: 40,
    },
    btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3
    },
    btnSize: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: '#778899',
        borderWidth: 1,
        marginHorizontal: 3,
        backgroundColor: 'white',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentColors: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentSize: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    separator: {
        height: 2,
        backgroundColor: "#eeeeee",
        marginTop: 20,
        marginHorizontal: 30
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    addToCarContainer: {
        marginHorizontal: 30
    }

})

export default styles
