import React from 'react';
import {View} from "react-native";
import Settings from "../components/Settings";

class SettingsScreen extends React.Component {

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('settingsScreen'),
    })

    state = {
        language: 'en'
    }


    navLanguage = () => {
        this.props.navigation.navigate('Language');
    }


    render() {
        let {t, setLocale} = this.props.screenProps;

        return (
            <View style={{flex: 1}}>
                <Settings
                    username={this.props.screenProps.username}
                changeLanguage={this.navLanguage}
                />
            </View>
        )

    }

}

export default SettingsScreen

/*
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={itemValue =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label={t('italian')} value="it"/>
                    <Picker.Item label={t('english')} value="en"/>
                    <Picker.Item label={t('german')} value="de"/>
                </Picker>
                <Button onPress={() => setLocale(this.state.language)} title={t('setLanguage')}/>

 */
