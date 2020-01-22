/* -------------------------------------------------------------------------
*  guida per unstated
*  https://github.com/jamiebuilds/unstated
*  -------------------------------------------------------------------------
*  guida per react-elements
*  https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
*  -------------------------------------------------------------------------
*/

import React from 'react';
import {StyleSheet, View, YellowBox} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from "unstated";
import i18n from "i18n-js";
import LoginScreen from "./screens/LoginScreen";
import { AppearanceProvider } from 'react-native-appearance';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

class App extends React.Component {

    state = {
        locale: 'it',
        logged: true,
    }

    t = (scope, options) => {
        return i18n.t(scope, {locale: this.state.locale, ...options});
    };

    setLocale = locale => {
        this.setState({locale})
    };

    setAuth = logged => {
        this.setState({logged});
        console.log('true');
    };

    render() {

        if (this.state.logged) {
            return (
                <AppearanceProvider>
                <Provider>
                    <View style={styles.container}>
                        <AppNavigator
                            screenProps={{
                                t: this.t,
                                locale: this.state.locale,
                                setLocale: this.setLocale,
                            }}
                        />
                    </View>
                </Provider>
                    </AppearanceProvider>
                    )

        } else {
            return (
                <AppearanceProvider>

                <Provider>
                    <View style={styles.login_container}>
                        <LoginScreen
                            loggedProps={{
                                setAuth: this.setAuth,
                            }}
                        />
                    </View>
                </Provider>
                    </AppearanceProvider>
                    )
        }
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
