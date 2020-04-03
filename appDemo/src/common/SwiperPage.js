import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'

export default class SwiperPage extends Component {
    start = () => {
        AsyncStorage.setItem('isFirstInstall','true',()=>{
            console.log('a')
            this.props.afterInstall();
        });
    }
    render() {
        return (
                <View style={styles.slide1}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/slide.png')}
                    />
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={{ color: '#fff' }}>开始体验</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%'
    },
    slide1: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
    },
    start: {
        position: 'absolute',
        bottom: 150,
        width: 120,
        height: 40,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'red',
        borderRadius: 20
    }
})