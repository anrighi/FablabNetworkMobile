import React, {Component} from 'react'
import {Dimensions, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

class Fablab extends Component {

    state = {
        fablab: {
            name: '',
            image: '',
            address: '',
            telephone: '',
            email: '',
            coord: {lat: '', lon: ''}
        },
        loading: true,
        nav: this.props.navFunction,
    }

    getFablabData = async (username) => {
        const url = "http://fablabnetwork.tk/php/get-fablabs.php?us=" + username;
        return await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {

                return {
                    name: response[0].name,
                    image: {uri: 'http://www.fablabnetwork.tk/' + response[0].image},
                    address: response[0].address,
                    telephone: response[0].telephone,
                    coord: {lat: Number(response[0].lat), lon: Number(response[0].lon)},
                    email: response[0].email
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    componentDidMount() {
        this.getFablabData('bitz').then(response => {
            this.setState({
                fablab: response
            })
        }).then(() => this.setState({loading: false}))
    }

    renderDescription = () => {
        return (
            <View>
                <Text style={styles.priceText}>{this.state.fablab.name}</Text>
                <Text style={styles.descriptionText}>{this.state.fablab.address}</Text>
            </View>
        )
    }

    renderNavigator = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity style={[styles.navigatorButton, {flex: 2}]}>
                    <Text style={styles.navigatorText}>DIRECTIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navFunction({coord: this.state.fablab.coord})}
                    style={[styles.navigatorButton, {flex: 1}]}>
                    <Text style={styles.navigatorText}>Show on Map</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderContactHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.coverContainer}>
                    <ImageBackground source={this.state.fablab.image}
                                     style={styles.coverImage}>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    render() {
        if (this.state.loading) {
            return <Text>loading</Text>
        } else {
            return (
                <View style={styles.mainviewStyle}>
                    <ScrollView style={styles.scroll}>
                        <View style={[styles.container, this.props.containerStyle]}>
                            <View style={styles.cardContainer}>
                                {this.renderContactHeader()}
                            </View>
                        </View>
                        <View style={styles.productRow}>{this.renderDescription()}</View>
                        <View style={styles.productRow}>{this.renderNavigator()}</View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.buttonFooter}>
                            <Text style={styles.textFooter}
                                  onPress={() => Linking.openURL('tel:' + this.state.fablab.telephone)}>Call</Text>
                        </TouchableOpacity>
                        <View style={styles.borderCenter}/>
                        <TouchableOpacity style={styles.buttonFooter}>
                            <Text style={styles.textFooter}
                                  onPress={() => Linking.openURL('mailto:' + this.state.fablab.email)}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
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
        height: Dimensions.get('window').width * (3 / 4),
        width: Dimensions.get('window').width,
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    scroll: {
        backgroundColor: '#FFF',
        flex: 1,
        marginBottom: 55,
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

})

export default Fablab
