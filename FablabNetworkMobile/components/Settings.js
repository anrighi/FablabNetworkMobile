import React, {Component} from 'react'
import {StyleSheet, Switch, Text, View} from 'react-native'
import {Avatar, ListItem} from 'react-native-elements'

import BaseIcon from './Icon'
import Chevron from './Chevron'
import InfoText from './InfoText'


class Settings extends Component {

    state = {
        pushNotifications: true,
    }

    onPressOptions = () => {
        this.props.navigation.navigate('options')
    }

    onChangePushNotifications = () => {
        this.setState(state => ({
            pushNotifications: !state.pushNotifications,
        }))
    }

    render() {
        const {avatar, name} = {
            avatar: 'http://www.fablabnetwork.tk/images/userProfilePhoto/66_1559641247.jpg',
            name: 'ANDREA',
        }
        return (
            <View style={styles.scroll}>
                <View style={styles.userRow}>
                    <Avatar rounded size="large" source={{uri: avatar,}}/>
                    <Text style={{paddingLeft: 10, fontSize: 16}}>{name}</Text>
                </View>
                <InfoText text="Settings"/>
                <View>
                    <ListItem
                        hideChevron
                        title="Push Notifications"
                        containerStyle={styles.listItemContainer}
                        rightElement={
                            <Switch
                                onValueChange={this.onChangePushNotifications}
                                value={this.state.pushNotifications}
                            />
                        }
                        leftIcon={
                            <BaseIcon
                                containerStyle={{
                                    backgroundColor: '#FFADF2',
                                }}
                                icon={{
                                    type: 'material',
                                    name: 'notifications',
                                }}
                            />
                        }
                    />
                    <ListItem
                        title="Language"
                        rightTitle="English"
                        rightTitleStyle={{fontSize: 15}}
                        onPress={() => this.props.changeLanguage()}
                        containerStyle={styles.listItemContainer}
                        leftIcon={
                            <BaseIcon
                                containerStyle={{backgroundColor: '#FEA8A1'}}
                                icon={{
                                    type: 'material',
                                    name: 'language',
                                }}
                            />
                        }
                        rightIcon={<Chevron/>}
                    />
                </View>
            </View>
        )
    }
}

export default Settings

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'white',
    },
    userRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
    },
    userImage: {
        marginRight: 12,
    },
    listItemContainer: {
        height: 55,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
    },
})
