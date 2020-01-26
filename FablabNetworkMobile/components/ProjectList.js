import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {ListItem} from "react-native-elements";
import {getProjects} from "./webServices/userGetters";

class ProjectList extends React.Component {

    state = {
        loading: true,
        projects: [],
        user: 'giorgio'
    }

    componentDidMount() {
        getProjects(this.state.user).then(response => {
            this.setState({
                projects: response,
            })
        }).then(() => this.setState({loading: false}))
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator/>
        } else {
            return (
                <View>
                    <ScrollView>
                        {this.state.projects.map((proj, idx) => {
                            return (
                                <ListItem
                                    key={idx}
                                    title={proj.title}
                                    leftAvatar={{
                                        rounded: true,
                                        source: {uri: proj.images[0]}
                                    }}
                                    onPress={() => this.props.navFunction(proj)}
                                />
                            );
                        })}
                    </ScrollView>
                </View>

            )
        }
    }
}

export default ProjectList
