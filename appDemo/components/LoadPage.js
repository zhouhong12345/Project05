import React, { Component } from 'react'
import {
    View,
    Text,
    AsyncStorage,
    Button,
    ScrollView,
    StatusBar
} from 'react-native';


//npm run android 或者 react-native run-android ,在模拟器上或真机上装的
//是测试版本的安装包，不要每天装一次，以后只需要执行npm start起服务即可，
//然后点开App,服务界面就会编译文件

//adb reverse tcp:8081 tcp:8081

//执行 ./gradlew. 打包出一个签名好的可用于发布的版本的安装包，不用于调试
//手机调试
//1、打开开发者选项（选一种方式连接手机）
//2、测试 adb devices
//3、react-native run-android
//4、拔掉数据线后，再接入的时候，不用再装，还是执行npm start，
//5、同时还要执行adb reverse tcp:8081 tcp:8081
//6、点开App软件即可





export default class LoadPage extends Component {
    constructor() {
        super();
        this.state = {
            tits: []
        }
    }
    storeData = async () => {
        await AsyncStorage.setItem('userName', 'helloworld',
            () => { console.log('srore success') })
    }
    getData = () => {
        AsyncStorage.getItem('userName')
            .then((res) => console.log(res));
    }
    getTitle = () => {
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res => {
                this.setState({ tits: res.data });
            })
    }
    render() {
        return (
            <View>
                {/* 状态栏 */}
                <StatusBar backgroundColor='transparent' translucent={true}/>
                <ScrollView>
                    <Button title='存储' onPress={this.storeData} />
                    <Button title='获取' onPress={this.getData} />
                    <Button title='请求title' onPress={this.getTitle} />
                    {
                        this.state.tits.map((item) => (
                            <Text style={{fontSize:17}}>{item.title}</Text>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
