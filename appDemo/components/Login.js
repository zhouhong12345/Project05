import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    render() {
        return (
            <View style={{justifyContent:'center'}}>
                <View style={{ alignItems: 'center',height:400}}>
                    <View style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        //borderRadius: 20,
                        paddingLeft: 20
                    }}>

                        {/* <Image style={{ width: 20, height: 20 }} source={require('../assets/icon/user.png')} /> */}
                        <Icon name='user' color='red' />
                        <TextInput placeholder='搜索' />
                    </View>
                    <View style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        //borderRadius: 20,
                        paddingLeft: 20
                    }}>

                        {/* <Image style={{ width: 20, height: 20 }} source={require('../assets/icon/user.png')} /> */}
                        <Icon name='user' color='red' />
                        <TextInput placeholder='搜索' />
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop:30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={Actions.pop}>
                        <Text>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
