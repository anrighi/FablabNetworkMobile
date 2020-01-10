import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Marker} from 'react-native-maps';
import {Subscribe} from "unstated";
import ReadingContainer from "../containers/ReadingContainer";

export default class Map extends React.Component {

    render() {
        return (
            <MapView style={styles.mapStyle}>
                <Subscribe to={[ReadingContainer]}>
                    {props => (
                        props.state.read.map(function (d, idx) {
                            return (
                               <Marker
                                  key={idx++}
                                  coordinate={{latitude: d.coord.lat, longitude: d.coord.lon}}
                                  title={d.name}
                                />
                            )
                        })
                    )}
                </Subscribe>
            </MapView>
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
