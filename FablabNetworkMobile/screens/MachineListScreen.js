import React from 'react';
import {View} from 'react-native';
import MachineList from "../components/MachineList";

class MachineListScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    printerFunction = (printerData) => {
        this.props.navigation.navigate('Printer', printerData)
    }

    machineFunction = (machineData) => {
        this.props.navigation.navigate('Machine', machineData)
    }


    render() {
        return (
            <View>
                <MachineList machineFunction={this.machineFunction} printerFunction={this.printerFunction}/>
            </View>
        );
    }

}

export default MachineListScreen
