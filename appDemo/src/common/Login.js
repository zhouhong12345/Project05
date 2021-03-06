import React, { Component } from 'react';
import { Router, View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, BackHandler, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            isLoading: false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }


    login = () => {
        this.setState({
            isLoading: true
        })
        // myFetch.get('topic',{limit:4,user:'sss'})
        myFetch.post('/login', {
            username: this.state.username,
            pwd: this.state.pwd
        }).then(res => {
            console.log(res)
            //根据返回状态进行判断,正确时跳转首页
            AsyncStorage.setItem('user', JSON.stringify(res.data))
                .then(() => {
                    this.setState({
                        isLoading: false
                    })
                    Actions.homePage();
                })
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
                        //borderRadius: 20,
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
                        onPress={this.login}>
                        <Text>登录</Text>
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
                        onPress={()=>Actions.enroll()}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isLoading ? <View><Text>正在登录...</Text></View> : null
                }
            </View>
        );
    }
}
