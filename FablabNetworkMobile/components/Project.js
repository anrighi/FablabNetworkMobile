import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Project extends Component {

    state = {
        modalVisible: false,
        userSelected: [],
        project: this.props.project
    }

    __setImageSelected = (image) => {
        this.setState({selectedImage: image});
    }

    __renderImages = () => {
        return (
            <View style={styles.smallImagesContainer}>
                {this.state.project.images.map((prop, key) => {
                    return (
                        <TouchableOpacity key={key} onPress={() => {
                            this.__setImageSelected(prop)
                        }}>
                            <Image style={styles.smallImage} source={{uri: prop}}/>
                        </TouchableOpacity>
                    );
                })}
            </View>
        )
    }

    render() {
        let mainImage = (this.state.selectedImage) ? this.state.selectedImage : this.state.project.images[0];
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.name}>{this.state.project.title}</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.header}>
                                <View style={styles.mainImageContainer}>
                                    <Image style={styles.mainImage} source={{uri: mainImage}}/>
                                </View>
                                {this.__renderImages()}
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Description</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.description}>{this.state.project.description}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Project

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ebf0f7",
    },
    content: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
    },
    mainImage: {
        width: 170,
        height: 170,
    },
    smallImagesContainer: {
        flexDirection: 'column',
        marginLeft: 30
    },
    smallImage: {
        width: 60,
        height: 60,
        marginTop: 5,
    },
    btnColor: {
        height: 40,
        width: 40,
        borderRadius: 40,
        marginHorizontal: 3
    },
    contentColors: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 22,
        color: "#696969",
        fontWeight: 'bold',
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,
        color: "#696969",
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },

    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "white",
        marginHorizontal: 5,
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardTitle: {
        color: "#00BFFF"
    }
});
