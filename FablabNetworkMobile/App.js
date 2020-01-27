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
import {Provider, Subscribe} from "unstated";
import i18n from "i18n-js";
import {AppearanceProvider} from 'react-native-appearance';
import {LoginPersistentContainer} from "./containers/LoginPeristentContainer";
import {UserLoginContainer} from "./containers/UserLoginContainer";
import {FablabLoginContainer} from "./containers/FablabLoginContainer";
import LoginPersistencyChecker from "./components/LoginPersistencyChecker";

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillReceiveProps has been renamed',
]);

class App extends React.Component {

    state = {
        locale: 'it',
        logged: true,
        haslogged: false,
        container: '',
        username: '',

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

    setContainer = (type, username, logged) => {
        if (type = 'user') {
            this.setState({container: UserLoginContainer, username: username, haslogged: logged});
        } else if (type = 'fablab') {
            this.setState({container: FablabLoginContainer, username: username, haslogged: logged});
        } else {
            console.log('Error in setContainer: App.js row 42')
        }
    }

    render() {
        return (
            <AppearanceProvider>
                <Provider>
                    <Subscribe to={[LoginPersistentContainer]}>{pcon =>
                        (
                            <View style={styles.container}>
                                {
                                    pcon.state.logged && pcon.type === 'user' &&
                                    <Subscribe to={[UserLoginContainer]}>{container => (
                                        <AppNavigator
                                            screenProps={{
                                                t: this.t,
                                                locale: this.state.locale,
                                                setLocale: this.setLocale,
                                                username: pcon.state.username,
                                            }}
                                        />
                                    )}
                                    </Subscribe>
                                }
                                {
                                    pcon.state.logged && pcon.type === 'fablab' &&
                                    <Subscribe to={[FablabLoginContainer]}>{container => (
                                        <AppNavigator
                                            screenProps={{
                                                t: this.t,
                                                locale: this.state.locale,
                                                setLocale: this.setLocale,
                                                username: pcon.state.username,
                                            }}
                                        />
                                    )}
                                    </Subscribe>
                                }
                                {
                                    this.state.haslogged &&
                                    <Subscribe to={[this.state.container]}>{container => (
                                        <View style={styles.container}>
                                            <AppNavigator
                                                screenProps={{
                                                    t: this.t,
                                                    locale: this.state.locale,
                                                    setLocale: this.setLocale,
                                                    username: this.state.username,
                                                }}
                                            />
                                        </View>
                                    )}
                                    </Subscribe>
                                }
                                {
                                    !pcon.state.logged &&
                                    <LoginPersistencyChecker
                                        toCheck={{
                                            type: 'null',
                                            username: pcon.state.username,
                                            logged: false,
                                        }}
                                        persistency={pcon}
                                        setContainer={this.setContainer}
                                        styles={{styles: styles}}
                                    />
                                }
                            </View>
                        )}
                    </Subscribe>
                </Provider>
            </AppearanceProvider>
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
