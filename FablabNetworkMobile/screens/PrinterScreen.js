import React from 'react';
import {View} from 'react-native';
import Printer from "../components/Printer";

class PrinterScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    book = (id, username) => {
        this.props.navigation.navigate('Book', {id, username})
    }

    render() {
        return (
            <View>
                <Printer
                    name={this.props.navigation.state.params.printerData.name}
                    brand={this.props.navigation.state.params.printerData.brand}
                    id={this.props.navigation.state.params.printerData.id}
                    image={this.props.navigation.state.params.printerData.image}
                    hourlyCost={this.props.navigation.state.params.printerData.hourlyCost}
                    fablab={this.props.navigation.state.params.fablabUsername}
                    bookingFunction={this.book}
                />
            </View>
        );
    }

}

export default PrinterScreen
