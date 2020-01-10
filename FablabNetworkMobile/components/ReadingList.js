import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Subscribe} from "unstated";
import ReadingContainer from "../containers/ReadingContainer";
import WikiCard from "./WikiCard";

class ReadingList extends React.Component {

    render() {
        return (
            <Subscribe to={[ReadingContainer]}>
                {props => (
                    <ScrollView style={styles.container}>
                        {
                            props.state.read.map(function (d, idx) {
                                return (
                                    <WikiCard key={idx++} title={d.title} coord={d.coord}/>
                                )
                            })
                        }
                    </ScrollView>
                )}
            </Subscribe>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 30,
    },
});

export default ReadingList
