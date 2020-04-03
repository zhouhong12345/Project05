import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ToastAndroid, } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Data from './Data'

const styles = StyleSheet.create({
    btn: {
        width: 110,
        height: 35,
        borderRadius: 50,
        backgroundColor: '#f23030',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default class child extends Component {
    constructor() {
        super(),
            this.state = {
                page: 1
            }
    }
    last = () => {
        this.setState({
            page: this.state.page - 1
        })
        if (this.state.page - 1 == 0) {
            ToastAndroid.show('别点了到头啦', ToastAndroid.SHORT);
        }
    }
    next = () => {
        this.setState({
            page: this.state.page + 1
        })
    }
    render() {
        return (
            <View>
                <View style={{ height: 70, backgroundColor: '#f23030', paddingLeft: 15, paddingRight: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image
                            source={require('../../assets/icon/left.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: 'white' }}>我的发布</Text>
                    <Image
                        source={require('../../assets/icon/other.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
                <View style={{ backgroundColor: 'white' }}>
                    <Data p={this.state.page} />
                </View>
                <View style={{ paddingLeft: 20, paddingRight: 20, backgroundColor: 'white', height: 75, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={this.last} style={styles.btn}>
                        <Text style={{ color: 'white' }}>上一页</Text>
                    </TouchableOpacity>
                    <Text>第{this.state.page}页</Text>
                    <TouchableOpacity onPress={this.next} style={styles.btn}>
                        <Text style={{ color: 'white' }}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
