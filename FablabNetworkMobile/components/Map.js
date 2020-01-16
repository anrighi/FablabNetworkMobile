import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions, StyleSheet, Text} from 'react-native';

export default class Map extends React.Component {

    state = {
        fablabs: [],
        loading: true

    }

    getFablab = async () => {
        const url = "http://fablabnetwork.tk/php/get-fablabs.php";

        return await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {

                const fablabs = response;
                let array = []

                for (let i = 0; i < fablabs.length; i++) {

                    array = [...array, {
                        name: fablabs[i].name,
                        image: fablabs[i].image,
                        coord: {lat: Number(fablabs[i].lat), lon: Number(fablabs[i].lon)}
                    }];
                }

                return array
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    componentDidMount() {
        this.getFablab().then(response => {
            const array = response
            console.log(array)
            this.setState({
                fablabs: response
            })
        }).then(() => this.setState({loading: false}))
    }


    render() {
        if (this.state.loading) {
            return <Text>loading</Text>;
        } else {
            return (

                <MapView style={styles.mapStyle}>
                    {(
                        this.state.fablabs.map(function (d, idx) {
                            return (
                                <Marker
                                    key={idx++}
                                    coordinate={{latitude: d.coord.lat, longitude: d.coord.lon}}
                                    title={d.name}
                                />
                            )
                        })
                    )}
                </MapView>
            );
        }
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
