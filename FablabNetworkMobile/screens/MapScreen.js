import React from 'react';
import {View, StyleSheet, Button, Dimensions} from 'react-native';
import WikiList from '../components/WikiList';
import AddLocationScreen from "./AddLocationScreen";
import POIList from "../components/POIList";
import Map from "../components/Map";
import {Subscribe} from "unstated";
import POIContainer from "../containers/POIContainer";
import MapView from "react-native-maps";
import {Marker} from 'react-native-maps';

export default class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Map',
    };

    render() {
        return (
            <View style={styles.container}>
                <Map/>
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
