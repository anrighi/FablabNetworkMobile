import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from "../styles";

class Machine extends React.Component {

    state = {
        type: this.props.type,
    }

    render() {
        return (
            <View>
                <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image style={styles.productImg}
                           source={this.props.image}/>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.brand}>{this.props.brand}</Text>
                    <Text
                        style={styles.price}>€ {this.props.cost} {this.state.type === 'printer' ? 'per hour' : 'per day'}</Text>
                </View>
                <View style={styles.addToCarContainer}>
                    <TouchableOpacity style={styles.shareButton}
                                      onPress={() => this.props.bookingFunction(this.props.id, this.props.fablab)}>
                        <Text style={styles.shareButtonText}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Machine
