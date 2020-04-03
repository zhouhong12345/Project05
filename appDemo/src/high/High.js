import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

export default class High extends Component {
    render() {
        return (
            <View>
                <Text> 第三tab页 </Text>
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
