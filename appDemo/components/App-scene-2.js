import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';

//yarn remove react-native-router-flux
//yarn add react-native-router-flux@4.0.6                                                4

const styles = StyleSheet.create({

});

const App = () => {

  return (
    <Router>
      <Scene key='root'>
        {/* 默认显示第一个scene，如果没放在第一个，可以加initial属性 */}
        <Scene
          key='msg'
          title='消息'
          component={Msg}
          titleStyle={{ flex: 1, textAlign: 'center' }}
        />
        <Scene
          key='doc'
          component={Doc}
          title='文档'
          titleStyle={{ flex: 1, textAlign: 'center' }}
        />
        <Scene
          key='msgdetail'
          component={MsgDetail}
          title='消息详情'
          backTitle='消息'
          backButtonImage={require('./assets/icon/user.png')}
          titleStyle={{ flex: 1, textAlign: 'center' }}
          renderRightButton={<View></View>}
        />
      </Scene>
    </Router>

  );
};


export default App;
