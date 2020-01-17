import React from 'react';
import {StyleSheet, View} from 'react-native';
import Fablab from "../components/Fablab";

class FablabScreen extends React.Component {
    state = {
        focused: true
    }

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('nearby')
    });


    navigationFunction = coord => {
        this.props.navigation.navigate('Map', coord)
    }

    render() {
        return (
            <View style={styles.container}>
                <Fablab navFunction={this.navigationFunction}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingVertical: 5,
    },
});

export default FablabScreen
