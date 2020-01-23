import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Printer extends React.Component {

    state = {
        id: this.props.id,
        name: this.props.name,
        hourlyCost: this.props.hourlyCost,
        image: this.props.image,
        brand: this.props.brand,
        bookMachine: this.props.bookingFunction,
        fablab: this.props.fablab
    }

    render() {
        return (
            <View>
                <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image style={styles.productImg}
                           source={this.state.image}/>
                    <Text style={styles.name}>{this.state.name}</Text>
                    <Text style={styles.brand}>{this.state.brand}</Text>
                    <Text style={styles.price}>€ {this.state.hourlyCost} per hour</Text>
                </View>
                <View style={styles.addToCarContainer}>
                    <TouchableOpacity style={styles.shareButton} onPress={() => this.state.bookMachine(this.state.id, this.state.fablab)}>
                        <Text style={styles.shareButtonText}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
});

export default Printer
