import React from 'react';
import {View} from 'react-native';
import FablabList from "../components/FablabList";

class FablabListScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    navFunction = (fablab) => {
        this.props.navigation.navigate('Fab', {fablab})
    }

    mapFunction = (fablabs) => {
        this.props.navigation.navigate('GeneralMap', {total: true, fablabs})
    }


    render() {
        return (
            <View>
                <FablabList
                    mapFunction={this.mapFunction}
                    navFunction={this.navFunction}
                />
            </View>
        );
    }

}

export default FablabListScreen
