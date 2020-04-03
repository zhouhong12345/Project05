import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Button from 'react-native-button'

export default class SwiperPage extends Component {
    start = () => {
        AsyncStorage.setItem('isFirstInstall','true',()=>{
            this.props.afterInstall();
        });
    }
    render() {

        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/slide.png')}
                    />
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={{ color: '#fff' }}>开始体验</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide2}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/slide.png')}
                    />
                </View>
                <View style={styles.slide3} >
                    <Image
                        style={styles.img}
                        source={require('../../assets/slide.png')}
                    />
                </View>
            </Swiper>
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