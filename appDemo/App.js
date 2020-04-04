import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, BackHandler, ToastAndroid, AsyncStorage } from 'react-native';

import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Userinfor from './src/userinfor/Userinfor';

import servea from './src/servea/servea';
// import gooda from './src/gooda/gooda';
// import mea from './src/mea/mea';

import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';

import Short from './src/short/Short';
import Middle from './src/middle/Middle';
import High from './src/high/High';
import Another from './src/another/Another';
import Enroll from './src/common/Enroll';

console.disableYellowBox = true;

// App logo ：将myApp\android\app\src\main\res下的文件夹下图片换成自己的
//启动画面：react-native-splash-screen
//如果第一次安装，一般来说都有一个引导页（普通轮播图），注意本地存储记录下状态
//看功能。是否需要先登录，如果需要先登录。登陆完记录状态（用户信息）
//再次进入的时候，也要从本地判断是是否登陆过
//react native本地存储是异步的
//


const rootUrl = 'https://www.fastmock.site/mock/626dc8b1223fd02654799cd08b53359d/api'

const App = () => {
    let [isLogin, setLogin] = useState(false)
    let [isFirstInstall, setFirstInstall] = useState(true)
    let now = 0;
    useEffect(() => {
        //AsyncStorage.removeItem('isFirstInstall')
        AsyncStorage.getItem('isFirstInstall')
            .then(res => {
                if (res) {
                    setFirstInstall(false);
                }
            })
       // AsyncStorage.removeItem('user')
        AsyncStorage.getItem('user')
            .then(res => {
                let user = JSON.parse(res)
                if (!user) {
                    SplashScreen.hide();
                }
                if (user && user.token) {
                    setLogin(true);
                    Actions.homePage()
                    SplashScreen.hide();
                }
            })
    }, [])
    let afterInstall = () => {
        setFirstInstall(false)
    }
    if (isFirstInstall) {
        return <View style={{ flex: 1 }}>
            <SwiperPage afterInstall={afterInstall} />
        </View>
    }
    return (
        <Router
             backAndroidHandler={() => {
               // console.log(Actions.currentScene )
                if (Actions.currentScene != 'home' && Actions.currentScene != 'login') {
                    console.log('abb')
                    Actions.pop();
                    return true;
                } else if(Actions.currentScene == 'login' || Actions.currentScene == 'home') {
                    console.log('a')
                    if (new Date().getTime() - now < 2000) {
                        BackHandler.exitApp();
                    } else {
                        ToastAndroid.show('确定要退出吗', 100);
                        now = new Date().getTime();
                        return true;
                    }
                }
            }}
        >
            <Overlay>
                <Modal key='lightbox' hideNavBar>
                    <Lightbox key='lightbox'>
                        <Drawer
                            key='drawer'
                            contentComponent={() => <Text>drawer</Text>}
                            drawerIcon={() => <Icon name='menu' />}
                            drawerWidth={400}
                        >
                            <Scene key='enroll' hideNavBar component={Enroll} />
                            <Scene key='root'>
                                <Tabs
                                    key='tabbar'
                                    hideNavBar
                                    activeTintColor='red'
                                    inactiveTintColor='blue'
                                    tabBarStyle={{ backgroundColor: "#ccc" }}
                                >
                                    {/* 主页栏 */}
                                    <Scene key='homePage'
                                        title='第一tab页'
                                        icon={({ focused }) => <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name='home' />}
                                    // component={Short}
                                    >
                                        <Scene key='home' component={Short} />
                                        <Scene key='another' component={Another} />

                                    </Scene>
                                    {/* 商品分类*/}
                                    <Scene key='goodsPage'
                                        title='第二tab页'
                                        icon={({ focused }) => <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name='file' />}
                                    >
                                        <Scene key='goods' component={Middle} />
                                    </Scene>
                                    {/* 用户中心 */}
                                    <Scene key='userPage'
                                        icon={({ focused }) => <Icon color={focused ? 'red' : 'blue'} name='file' />}
                                        title='第三tab页'
                                        component={High}
                                    />
                                </Tabs>
                            </Scene>
                        </Drawer>
                    </Lightbox>
                    <Scene key='login' initial={!isLogin} component={Login} />
                </Modal>
            </Overlay>
        </Router>
    );
};
export default App;


