import React from 'react';
import {Alert, TouchableOpacity, StyleSheet, Image, Text, View, Button} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import {Subscribe} from "unstated";
import ReadingContainer from "../containers/ReadingContainer";
import MapView from "react-native-maps";
import {getDistance} from "./Geocoding";
import {LocationContainer} from "../containers/LocationContainer";

export default class WikiCard extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        title: this.props.title,
        coord: this.props.coord,
    }

    handlePressBrowser(title) {
        let link = 'https://en.wikipedia.org/wiki/' + title;
        WebBrowser.openBrowserAsync(
            link
        );
    }

    handlePressReading(container) {

        console.log('HANDLER ---> ' + this.state.coord.lat)

        Alert.alert(
            'Add to Reading List?',
            'Adding to a Reading List saves your favourite locations and shows them on the map!',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => container.insertLocation(this.state)},
            ],
            {cancelable: false}
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchable}
                                  onPress={async () => await this.handlePressBrowser(this.state.title)}>


                    <Text>{this.state.title}</Text>
                    <Subscribe to={[ReadingContainer]}>
                        {props => (
                            <Button
                                title="♡"
                                style={styles.button}
                                onPress={async () => await this.handlePressReading(props)}
                            />
                        )}
                    </Subscribe>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    touchable: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,

    },
    button: {
        color: '#cc0000',

    }
});
