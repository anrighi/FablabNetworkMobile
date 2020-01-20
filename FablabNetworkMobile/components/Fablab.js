import React, {Component} from 'react'
import {ImageBackground, Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {getFablabData} from "./webServices/getFablabData";
import styles from '../styles'

class Fablab extends Component {

    state = {
        username: 'bitz',
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
        book: this.props.bookFunction,
    }

    componentDidMount() {
        getFablabData(this.state.username).then(response => {
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
                <TouchableOpacity style={[styles.navigatorButton, {flex: 2}]} onPress={() => this.state.book(this.state.username)}>
                    <Text style={styles.navigatorText}>Book a machine</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.state.nav({coord: this.state.fablab.coord})}
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

export default Fablab
