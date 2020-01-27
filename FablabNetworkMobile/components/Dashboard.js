import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import {UserLoginContainer} from "../containers/UserLoginContainer";
import {Icon} from "react-native-elements"
import {Subscribe} from "unstated";
import {LoginPersistentContainer} from "../containers/LoginPeristentContainer";


class Dashboard extends Component {

    state = {
        loading: true,
        container: UserLoginContainer,
        data: [
            {id: 0, title: "MyBalance", color: "#FF4500", icon: 'euro-symbol',},
            {id: 1, title: "MyMembership", color: "#87CEEB", icon: 'credit-card',},
            {id: 2, title: "Projects", color: "#4682B4", icon: 'donut-large',},
            {id: 3, title: "Logout", color: "#4682B4", icon: 'exit-to-app'}
        ],
    };

    openPage(index,p) {
        if (index = 0) {
            console.log(index)
            this.props.navFunction('BalanceScreen');
        } else if (index = 1) {
            this.props.navFunction('MembershipScreen');
        } else if (index = 2) {
            this.props.navFunction('ProjectScreen');
        } else if (index = 3) {
            console.log("LOGGED OUT")
            p
        }
    }


    render() {
        return (
            <Subscribe to={LoginPersistentContainer}> {p =>(
            <View style={styles.container}>
                <FlatList style={styles.list}
                          contentContainerStyle={styles.listContainer}
                          data={this.state.data}
                          horizontal={false}
                          numColumns={2}
                          keyExtractor={(item) => {
                              return item.id;
                          }}
                          renderItem={({item}) => {
                              return (
                                  <View>
                                      <TouchableOpacity style={[styles.card, {backgroundColor: item.color}]}
                                                        onPress={() => {
                                                            this.openPage(item.id,p)
                                                        }}>
                                          <Icon
                                              raised
                                              name= {item.icon}
                                              color={'#000000'}
                                          />
                                      </TouchableOpacity>

                                      <View style={styles.cardHeader}>
                                          <View style={{alignItems: "center", justifyContent: "center"}}>
                                              <Text style={[styles.title, {color: item.color}]}>{item.title}</Text>
                                          </View>
                                      </View>
                                  </View>
                              )
                          }}/>
            </View>
            )} </Subscribe>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#fff',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#fff",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: "#e2e2e2",
        //flexBasis: '42%',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    title: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
});

export default Dashboard
