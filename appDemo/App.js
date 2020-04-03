import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, BackHandler, ToastAndroid, AsyncStorage } from 'react-native';

import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
// import Home from './src/home/Home';
// import Goods from './src/goods/Goods';
// import Userinfor from './src/userinfor/Userinfor';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';


// import Serve from './Project05/serve/Serve';
import Good from './Project05/good/Good';
import Me from './Project05/me/Me';

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
    let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
    
    let afterInstall=()=>{
        setFirstInstall(false)
    }
    if (isFirstInstall) {
        return <View style={{ flex: 1 }}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }
    return (
        <Router
            backAndroidHandler={() => {
                if (Actions.currentScene != 'home') {
                    Actions.pop();
                    return true;
                } else {
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
                                        title='首页'
                                        //   icon={() => <Image 
                                        //               style={{width:30,height:30}}
                                        //               source={require('./assets/icon/user.png')} />}
                                        icon={({ focused }) => <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name='home' />}
                                    component={Serve}
                                    >
                                        {/* <Scene key='home' component={serve} /> */}

                                    </Scene>
                                    {/* 商品分类*/}
                                    <Scene key='goodsPage'
                                        title='商品分类'
                                        //   icon={() => <Image 
                                        //               style={{width:30,height:30}}
                                        //               source={require('./assets/icon/user.png')} />}
                                        icon={({ focused }) => <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name='file' />}
                                    >
                                        <Scene key='goods' component={Good} />
                                    </Scene>
                                    {/* 用户中心 */}
                                    <Scene key='userPage'
                                        icon={({ focused }) => <Icon color={focused ? 'red' : 'blue'} name='file' />}
                                        title='个人中心'
                                        component={Me}
                                    />
                                </Tabs>
                            </Scene>
                        </Drawer>
                        {/* <Scene key='light' component={Mybox} /> */}
                    </Lightbox>
                    <Scene key='login' initial={!isLogin} component={Login} />
                    {/* <Scene key='login' component={ShowMyName} />
                    <Scene key='login1' component={Login} /> */}

                </Modal>
                {/* <Scene component={Message} /> */}

            </Overlay>
        </Router>
    );
};
export default App;
