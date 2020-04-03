import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Middle extends Component {
    render() {
        return (
            <View>
                <Text> 第二tab页 </Text>
                <Button
                        title="退出登录"
                        onPress={() => {
                          Actions.login()
                        //   AsyncStorage.removeItem()
                        }}
                />
            </View>
        )
    }
}
