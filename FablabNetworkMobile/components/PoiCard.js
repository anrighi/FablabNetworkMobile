import React from 'react';
import {ScrollView, StyleSheet, Image, Text, View, Button, TouchableOpacity} from 'react-native';
import {Subscribe} from "unstated";
import ReadingContainer from "../containers/ReadingContainer";
import {LocationContainer} from "../containers/LocationContainer";
import {WikiDataContainer} from "../containers/WikiDataContainer";
import {getWikiData} from "./WikiDataGetter";

export default class PoiCard extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        name: this.props.name,
        coord: this.props.coord
    }

    async callWikiGetter(container) {
        console.log(this.state.name)
        await getWikiData(this.props.newLocale, this.state, container)
    }


    render() {
        return (
            <View style={styles.container}>
                <Subscribe to={[WikiDataContainer]}>
                    {container => (
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={async () => await this.callWikiGetter(container).then(this.props.navigation)}
                        >
                            <Text>
                                {this.state.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                </Subscribe>
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
});
