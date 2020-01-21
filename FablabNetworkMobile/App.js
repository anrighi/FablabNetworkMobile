/* -------------------------------------------------------------------------
*  guida per unstated
*  https://github.com/jamiebuilds/unstated
*  -------------------------------------------------------------------------
*  guida per react-elements
*  https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
*  -------------------------------------------------------------------------
*/

import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Provider, Subscribe} from "unstated";
import i18n from "i18n-js";
import LoginPersistencyChecker from "./components/LoginPersistencyChecker";
import { LoginPersistentContainer} from "./containers/LoginPersistentContainer"


class App extends React.Component {

    state = {
        locale: 'it',
        logged: false,
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
                <Subscribe to={[LoginPersistentContainer]}>{pcon => (
                    <View style={styles.container}>
                        {
                            pcon.state.logged &&
                            <LoginPersistencyChecker
                                toCheck={{
                                    type: pcon.state.type,
                                    logged: true,
                                }}
                                screenProps={{
                                    t: this.t,
                                    locale: this.state.locale,
                                    setLocale: this.setLocale,
                                    login: pcon.state.username,
                                    type: pcon.state.type,
                                }}
                                styles={{styles: styles}}
                            />
                        }
                        {
                            !pcon.state.logged &&
                            <LoginPersistencyChecker
                                toCheck={{
                                    type: 'null',
                                    logged: false,
                                }}
                                screenProps={{
                                    t: this.t,
                                    locale: this.state.locale,
                                    setLocale: this.setLocale,
                                }}
                                styles={{styles: styles}}
                            />
                        }
                    </View>
                )}
                </Subscribe>
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
    login_container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 100,
    },
});

export default App
