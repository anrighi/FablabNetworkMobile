import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Subscribe} from "unstated";
import WikiCard from "./WikiCard";
import {WikiDataContainer} from "../containers/WikiDataContainer";

export default class WikiList extends React.Component {

    render() {
        return (
            <View>
                <Subscribe to={[WikiDataContainer]}>
                    {props => (
                        <ScrollView style={styles.container}>
                            {props.state.results.map(function (d, idx) {
                                return (
                                    <WikiCard key={idx++} title={d.title} coord={d.coord}/>
                                );
                            })
                            }
                        </ScrollView>
                    )}
                </Subscribe>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
});
