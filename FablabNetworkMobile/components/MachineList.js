import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {getFablabMachines} from "./webServices/fablabGetters";
import {ListItem} from "react-native-elements";

class MachineList extends React.Component {

    state = {
        loading: true,
        printers: [],
        machines: [],
        navFunction: this.props.navFunction,
        fablabUsername: this.props.fablab
    }

    componentDidMount() {
        getFablabMachines(this.state.fablabUsername).then(response => {
            this.setState({
                printers: response.printers,
                machines: response.machines,
            })
        }).then(() => this.setState({loading: false}))
    }

    render() {
        if (this.state.loading) {
            return <Text>loading</Text>
        } else {
            return (
                <ScrollView style={styles.container}>
                    {
                        this.state.printers.map((printer, idx) => {
                            return (
                                <ListItem
                                    key={idx}
                                    title={printer.name}
                                    leftAvatar={{
                                        rounded: true,
                                        source: printer.image
                                    }}
                                    onPress={() => this.state.navFunction('printer', printer, this.state.fablabUsername)}
                                />
                            );
                        })
                    }
                    {
                        this.state.machines.map((machine, idx) => {
                            return (
                                <ListItem
                                    key={idx}
                                    title={machine.name}
                                    leftAvatar={{
                                        rounded: true,
                                        source: machine.image
                                    }}
                                    onPress={() => this.state.navFunction('machine', machine, this.state.fablabUsername)}
                                />
                            );
                        })
                    }
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 30,
    },
});

export default MachineList
