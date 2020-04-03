import React, { Component } from 'react';
import { Router, View, Text, Image, TextInput, TouchableOpacity, BackHandler, ToastAndroid, AsyncStorage } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            isLoad: false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    enroll = () => {
        this.setState({
            isLoad: true
        })

        myFetch.post('/enroll', {
            username: this.state.username,
            pwd: this.state.pwd
        })
            .then(res => {
                if (res.data.token == '' && res.data.pwd == '') {
                    ToastAndroid.show('用户名或密码不能为空！', ToastAndroid.SHORT)
                }
                else {
                    if (res.data.token == '0') {
                        AsyncStorage.setItem('newuser', JSON.stringify(res.data))
                            .then(() => {
                                this.setState({
                                    isLoad: false
                                })
                                ToastAndroid.show(res.data.word, ToastAndroid.SHORT)
                                Actions.login()
                            })
                    }
                    else if (res.data.token == '1') {
                        ToastAndroid.show(res.data.word, ToastAndroid.SHORT)
                    }
                }
            })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}
            >
                <View style={{ alignItems: 'center' }}>
                    <View style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20
                    }}>
                        <Icon name='user' color='red' />
                        <TextInput placeholder='用户名'
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20
                    }}>
                        <Icon name='user' color='red' />
                        <TextInput placeholder='密码'
                            onChangeText={this.pwdhandle}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.enroll}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => Actions.login()}>
                        <Text>返回登录页</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isLoad ? ToastAndroid.show('正在注册', ToastAndroid.SHORT) : null
                }
            </View>
        );
    }
}
