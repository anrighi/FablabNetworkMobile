import React from 'react';
import {View} from 'react-native';
import MachineList from "../components/MachineList";

class MachineListScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    navFunction = (type, machineData, fablabUsername) => {
        console.log(machineData)
        this.props.navigation.navigate('Machine', {type, machineData, fablabUsername})
    }


    render() {
        return (
            <View>
                <MachineList navFunction={this.navFunction} fablab={this.props.navigation.state.params}/>
            </View>
        );
    }

}

export default MachineListScreen
