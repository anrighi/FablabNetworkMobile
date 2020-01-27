import React, {Component} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {getUserData} from "./webServices/userGetters";

class User extends Component {

    state = {
        username: this.props.username,
        user: '',
        loading: true
    }

    componentDidMount() {
        getUserData(this.state.username).then(response => {
            this.setState({
                user: response
            })
        }).then(() => this.setState({loading: false}))
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator/>
        } else {
            return (
                <View style={styles.container}>
                    <ImageBackground source={this.state.user.cover} style={styles.coverImage}/>
                    <Image style={styles.avatar} source={this.state.user.profile}/>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>{this.state.user.name + ' ' + this.state.user.surname}</Text>
                            <Text style={styles.description}>{this.state.user.description}</Text>
                        </View>
                        <View style={styles.bodyContent}>
                            <TouchableOpacity style={styles.buttonContainer}
                                              onPress={() => this.props.navFunction(this.state.username)}>
                                <Text>View My Projects</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }

    }
}

export default User

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    coverImage: {
        height: Dimensions.get('window').width * (4 / 9),
        width: Dimensions.get('window').width,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 70
    },
    body: {
        marginTop: 50,
    },
    bodyContent: {
        alignItems: 'center',
        padding: 5,
    },
    name: {
        fontSize: 28,
        color: "#69000c",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});
