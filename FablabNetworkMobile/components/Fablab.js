import React, {Component} from 'react'
import {ImageBackground, Linking, Text, TouchableOpacity, View} from 'react-native'
import styles from '../styles'
import {Icon} from 'react-native-elements'
import {becomeMember} from "./webServices/booking";

class Fablab extends Component {

    state = {
        fablab: this.props.data,
        loading: false,
    }

    render() {
        return (
            <View style={styles.mainviewStyle}>
                <View style={[styles.container, this.props.containerStyle]}>
                    <ImageBackground
                        source={this.state.fablab.image}
                        style={styles.coverImage}
                    />
                </View>
                <View style={styles.productRow}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.priceText}>{this.state.fablab.name}</Text>
                        <Icon
                            raised
                            name='person-add'
                            color='#f50'
                            onPress={() => becomeMember('giorgio', this.state.username)}/>

                    </View>
                    <Text style={styles.descriptionText}>{this.state.fablab.address}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={[styles.navigatorButton, {flex: 2}]}
                                          onPress={() => this.props.bookFunction(this.state.fablab.username)}>
                            <Text style={styles.navigatorText}>Book a machine</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navFunction({coord: this.state.fablab.coord})}
                            style={[styles.navigatorButton, {flex: 1}]}>
                            <Text style={styles.navigatorText}>Show on Map</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            raised
                            name='call'
                            color='#f50'
                            onPress={() => Linking.openURL('tel:' + this.state.fablab.telephone)}/>
                        <Icon
                            raised
                            name='email'
                            color='#f50'
                            onPress={() => Linking.openURL('mailto:' + this.state.fablab.email)}/>
                    </View>
                </View>
            </View>
        )
    }
}

export default Fablab
