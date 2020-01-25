import React from 'react';
import {View} from 'react-native';
import Machine from "../components/Machine";

class MachineScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    book = (id, username) => {
        this.props.navigation.navigate('Book', {id, username, type: this.props.navigation.state.params.type})
    }

    render() {
        return (
            <View>
                <Machine
                    name={this.props.navigation.state.params.machineData.name}
                    brand={this.props.navigation.state.params.machineData.brand}
                    id={this.props.navigation.state.params.machineData.id}
                    image={this.props.navigation.state.params.machineData.image}
                    cost={this.props.navigation.state.params.machineData.hourlyCost}
                    fablab={this.props.navigation.state.params.fablabUsername}
                    type={this.props.navigation.state.params.type}
                    bookingFunction={this.book}
                />
            </View>
        );
    }

}

export default MachineScreen
