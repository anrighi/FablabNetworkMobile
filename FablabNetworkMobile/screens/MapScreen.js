import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Map from "../components/Map";

export default class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Map',
    };


    render() {
        console.log(this.totalFlag)

        return (
            <View style={styles.container}>
                <Map totalView={this.props.navigation.state.params.total}
                     coord={this.props.navigation.state.params.coord}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
