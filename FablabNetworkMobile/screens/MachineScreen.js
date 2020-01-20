import React from 'react';
import {View} from 'react-native';
import MachineList from "../components/MachineList";
import Machine from "../components/Machine";

class MachineScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    render() {
        return (
            <View>
                <Machine/>
            </View>
        );
    }

}

export default MachineScreen
