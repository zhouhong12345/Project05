import React from 'react';

import { Router, Scene, Tabs } from 'react-native-router-flux';

import { Icon } from '@ant-design/react-native';

import Serve from './components/Project02/Serve';
import Good from './components/Project02/Good';
import Me from './components/Project02/Me';
import Msg from './components/Msg';
import Home from './components/Home';
import Release from './components/Project02/Release';
import Doc from './components/Doc';



console.disableYellowBox = true;


const Root = () => {
  return (
    <Router>
      <Scene key='all' >
        <Tabs
          hideNavBar
          key='tabbar'
          activeTintColor='red'
          inactiveTintColor='gray'
        >
          <Scene
            icon={({ focused }) => <Icon
              color={focused ? 'red' : 'gray'}
              name='home' />}
            hideNavBar
            key='s'
            component={Serve}
            // initial={true}
            title='首页'
          />
          <Scene
            icon={({ focused }) => <Icon
              color={focused ? 'red' : 'gray'}
              name='appstore' />}
            hideNavBar
            key='g'
            component={Good}
            title='商品分类'
          />
          <Scene
            icon={({ focused }) => <Icon
              color={focused ? 'red' : 'gray'}
              name='shopping-cart' />}
            hideNavBar
            key='b'
            component={Msg}
            title='购物车'
         />
          <Scene
            icon={({ focused }) => <Icon
              color={focused ? 'red' : 'gray'}
              name='user' />}
            hideNavBar
            key='mone'
            title='个人中心'
            initial={true}
          >
            <Scene key='mtwo' component={Me}/>
            <Scene key='release' component={Release} title='我的发布' hideNavBar hideTabBar/>
          </Scene>
        </Tabs>
      </Scene>
    </Router>
  );
};

export default Root;
 

