import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class short extends Component {
    render() {
        return (
            <View>
                <Text>第一tab页</Text>
                <Button
                    title="跳转二级页面"
                    onPress={() => Actions.another()}
                />
                <TouchableOpacity style={{marginTop:20}}>
                    <Button
                        title="退出登录"
                        onPress={() => {
                          Actions.login()
                          AsyncStorage.removeItem('user')
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
