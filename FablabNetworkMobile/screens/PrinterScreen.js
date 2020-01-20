import React from 'react';
import {View} from 'react-native';
import Printer from "../components/Printer";

class PrinterScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    book = (props) => {

        this.props.navigation.navigate('Book', props)
    }

    render() {
        return (
            <View>
                <Printer
                    name={this.props.navigation.state.params.name}
                    brand={this.props.navigation.state.params.brand}
                    id={this.props.navigation.state.params.id}
                    image={this.props.navigation.state.params.image}
                    hourlyCost={this.props.navigation.state.params.hourlyCost}
                    bookingFunction={this.book}
                />
            </View>
        );
    }

}

export default PrinterScreen
