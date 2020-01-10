// guida per unstated
// https://github.com/jamiebuilds/unstated

import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from "unstated";
import i18n from "i18n-js";

class App extends React.Component {

    state = {
        locale: 'it'
    }

    t = (scope, options) => {
        return i18n.t(scope, {locale: this.state.locale, ...options});
    };

    setLocale = locale => {
        this.setState({locale})
    };

    render() {
        return (
            <Provider>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <AppNavigator
                        screenProps={{
                            t: this.t,
                            locale: this.state.locale,
                            setLocale: this.setLocale,
                        }}
                    />
                </View>
            </Provider>
        )
    }
}

const en = {
    addLocation: 'Add location',
    poiTitle: 'Points of Interest',
    useLocation: 'Use current location',
    showMap: 'Show map',
    readingList: 'Reading List',
    settingsScreen: 'Settings',
    setLanguage: 'Change language',
    english: 'English',
    italian: 'Italian',
    german: 'German',
    nearby: 'Nearby'

}


const it = {
    addLocation: 'Inserisci località',
    poiTitle: 'Punti di interesse',
    useLocation: 'Usa la posizione corrente',
    showMap: 'Mostra la mappa',
    readingList: 'Per dopo',
    settingsScreen: 'Impostazioni',
    setLanguage: 'Imposta la lingua',
    english: 'Inglese',
    italian: 'Italiano',
    german: 'Tedesco',
    nearby: 'Nelle vicinanze'
}

const de = {
    addLocation: 'Position einfügen',
    poiTitle: 'Sehenswürdigkeiten',
    useLocation: 'aktuellen Standort verwenden',
    showMap: 'Karte anzeigen',
    readingList: 'Leseliste',
    settingsScreen: 'Einstellungen',
    setLanguage: 'Sprache ändern',
    english: 'Englisch',
    italian: 'Italienisch',
    german: 'Deustch',
    nearby: 'in der Nähe'

}


i18n.translations = {it, en, de};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App
