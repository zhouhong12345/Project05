import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Another extends Component {
    render() {
        return (
            <View>
                <Text> hello 这里是二级页面 </Text>
                <Button title="返回上一级" onPress={()=>Actions.pop()}/>
            </View>
        )
    }
}
