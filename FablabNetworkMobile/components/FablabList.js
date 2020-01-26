import React from 'react';
import {ActivityIndicator, Button, ScrollView, View} from 'react-native';
import {getFablabs} from "./webServices/fablabGetters";
import {ListItem} from "react-native-elements";

class FablabList extends React.Component {

    state = {
        loading: true,
        fablabs: [],
    }

    componentDidMount() {
        getFablabs().then(response => {
            this.setState({
                fablabs: response,
            })
        }).then(() => this.setState({loading: false}))
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator/>
        } else {
            return (
                <View>
                    <Button onPress={() => this.props.mapFunction(this.state.fablabs)} title={'Show map'}/>
                    <ScrollView>
                        {this.state.fablabs.map((fab, idx) => {
                            return (
                                <ListItem
                                    key={idx}
                                    title={fab.name}
                                    leftAvatar={{
                                        rounded: true,
                                        source: fab.image
                                    }}
                                    onPress={() => this.props.navFunction(fab)}
                                />
                            );
                        })}
                    </ScrollView>
                </View>

            )
        }
    }
}

export default FablabList
