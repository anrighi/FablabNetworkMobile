import React, {Component} from 'react'
import {ScrollView, Alert, View} from 'react-native'
import {UserLoginContainer} from "../containers/UserLoginContainer";
import styles from "../styles";
import {Button, Card, Image, ListItem, Overlay} from "react-native-elements";
import {getMembership} from "./webServices/userGetters";
import {disableMembership} from "./webServices/userSetters";


class MembershipList extends Component {

    state = {
        memberships: [],
        loading: true,
        settingsNav: this.props.settingsNav,
        container: UserLoginContainer,
        found: false,
        confirmation: false,
    };

    componentDidMount() {

        console.log(this.props.username);
        getMembership(this.props.username).then(res => {
            if(res === "membershipException" | res === "nullParamException") {
                this.setState({found: false})
            } else {
                this.setState({memberships: res.memberships})
            }
        }).then(() => this.setState({loading: false}))
    }

    disableMemb(id){

        Alert.alert(
            'Are you sure?',
            'To enable again your membership you have to present yourself by your fablab with a valid id-card. Do you want to proceed?,',
            [
                {
                    text: 'Cancel',
                    onPress: () => this.setState({confirmation: false}),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.setState({confirmation: true})}
            ],
            { cancelable: false }
        );

        if(this.state.confirmation) {
            disableMembership(id).then(res => {
                if(res === "Success!"){
                    Alert.alert(
                        'Success',
                        'Your membership is now disabled!',
                            [
                                { text: 'OK' }
                            ],
                        { cancelable: false }
                    );
                    console.log(res)
                }
                else {
                    Alert.alert(
                        'Error',
                        'An error occurred, please try later',
                        [
                            { text: 'OK' }
                        ],
                        { cancelable: false }
                    );
                    console.log(res)
                }
            })
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <Overlay
                    isVisible={this.state.loading}
                    overlayStyle={{width: 55, height:55, alignContent:'center'}}
                    borderRadius={100}>

                    <Button
                        type="clear"
                        width="50"
                        height="50"
                        loading
                    />
                </Overlay>
            )
        } else {
            return (
                <ScrollView style={styles.mainviewStyle}>
                    {
                        this.state.memberships.map((membership, index) => {
                            let active = '';
                            if(membership.active){
                                active = 'Active';
                            } else {
                                active = 'Inactive';
                            }
                          return (
                              <ListItem
                                  key={index}
                                  leftAvatar={{ source: { uri: membership.profile_photo } }}
                                  title={membership.fablab_username}
                                  subtitle={"Member since" + membership.start_date
                                  + " - " + active}
                                  onPress={() => this.disableMemb(membership.id)}
                                  bottomDivider
                                  chevron
                              />
                          )
                        })
                    }
                </ScrollView>
            )
        }
    }
}

export default MembershipList;
