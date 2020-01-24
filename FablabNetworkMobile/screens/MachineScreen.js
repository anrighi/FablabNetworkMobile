import React from 'react';
import {View} from 'react-native';
import MachineList from "../components/MachineList";
import Machine from "../components/Machine";
import Printer from "../components/Printer";

class MachineScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    book = (id, username) => {
        this.props.navigation.navigate('Book', {id, username, type: 'machine'})
    }

    render() {
        return (
            <View>
                <Machine
                    name={this.props.navigation.state.params.machineData.name}
                    brand={this.props.navigation.state.params.machineData.brand}
                    id={this.props.navigation.state.params.machineData.id}
                    image={this.props.navigation.state.params.machineData.image}
                    hourlyCost={this.props.navigation.state.params.machineData.hourlyCost}
                    fablab={this.props.navigation.state.params.fablabUsername}
                    bookingFunction={this.book}
                />
            </View>
        );
    }

}

export default MachineScreen
