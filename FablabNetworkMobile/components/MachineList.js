import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {getFablabMachines} from "./webServices/getFablabMachines";
import {ListItem} from "react-native-elements";

class MachineList extends React.Component {

    state = {
        loading: true,
        printers: [],
        machines: [],
        machineFunction: this.props.machineFunction,
        printerFunction: this.props.printerFunction
    }

    componentDidMount() {
        getFablabMachines('bitz').then(response => {
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
                                    onPress={() => this.state.printerFunction(printer)}
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
                                    onPress={() => this.state.machineFunction(machine)}
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
