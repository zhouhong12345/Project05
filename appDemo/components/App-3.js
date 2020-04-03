import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image}  from 'react-native';

import { Router, Scene, Tabs }from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import {Grid,Icon} from '@ant-design/react-native';

//yarn remove react-native-router-flux
//yarn add react-native-router-flux@4.0.6                                                4

const styles = StyleSheet.create({

});

const App = () => {
  //实现 Tabs
  return (
    <Router>
      <Scene key='root'>
        <Tabs
          key='tabbar'
          hideNavBar
          activeTintColor='red'
          inactiveTintColor='blue'
          tabBarStyle={{ backgroundColor: "#ccc" }}
        >
          {/* 消息栏 */}
          <Scene key='msg'
            title='消息'
          //   icon={() => <Image 
          //               style={{width:30,height:30}}
          //               source={require('./assets/icon/user.png')} />}
            icon={({focused})=><Icon 
                  color={focused?'red':'green'} 
                  name='home'/>}   
          >
            <Scene key='ms' component={Msg} />
            <Scene key='msgdetail' component={MsgDetail} hideTabBar />
          </Scene>
          {/* 文档栏 */}
          <Scene key='doc'>
            <Scene key='docs' component={Doc} />
          </Scene>
        </Tabs>
      </Scene>
    </Router>

  );
};


export default App;
