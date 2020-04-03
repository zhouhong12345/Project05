/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  // SafeAreaView,
  // StyleSheet,
  // ScrollView,//滚动组件
  View,//相当于div
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
  SectionList,
  Dimensions,
  PixelRatio,
  BackHandler,
  ToastAndroid
} from 'react-native';

import Counter from './Counter';
import ShowMyName from './ShowMyName';
import ImageBg from './components/ImageBg';

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,//Dimensions.height
    margin: 10,
    borderColor:'red',
    borderWidth:1,
  },
  box1: {
    width: 100,
    height: 100,//Dimensions.height
    margin: 10,
    borderColor:'red',
    borderWidth:1/1.5,
  },
  txt: {
    color: "red"
  },
  size: {
    fontSize: 20
  }
});

//view --容器组件
//Text --显示文本的组件


// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

//JS
//TypeScript
//RN、angular、Vue3

//1.创建一个组件，名为Hello，返回Helloworld，在App组件里调用

const Hello = () => {
  return (
    <Text>helloworld123</Text>
  )
}

//2.创建一个组件ShowMyName，返回hello+你的名字，名字在调用的时候传入

//3.写一个Counter，返回一个数字文本和一个按钮，点击按钮，数字加1。

const App = () => {
  let isExit=false;
  let now=0;
  BackHandler.addEventListener('back',()=>{
    console.log(new Date().getTime()-now<2000);
    if(new Date().getTime()-now<2000){
      BackHandler.exitApp();
    }
    else{
      ToastAndroid.show('确定要退出吗',100);
      now=new Date().getTime();
      return true;
    }


    // console.log('back');
    // if(isExit){
    //   BackHandler.exitApp();//退出程序
    //   return false;
    // }
    // ToastAndroid.show('确定要退出么',50)
    // isExit=true;
    // setTimeout(()=>{
    //   isExit=false;
    // },2000)

    // return true;
    

  })

  let style = {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
  let [val, setVal] = useState('1');

  //flaslist
  let [isFresh, setFresh] = useState(false);
  let data = [];
  // useEffect(() => {
  for (var i = 0; i < 100; i++) {
    data.push({ key: i + '', title: i + 'abc' })
  }
  //}, [])

  let [da, setDa] = useState(data);
  let addData = () => {
    for (var i = 100; i < 200; i++) {
      data.push({ key: i + '', title: i + 'abc' })
    }
    setDa(data);
  }

  let upDateData = () => {
    setFresh(true);
    setTimeout(() => {
      setFresh(false);
    }, 2000)
  }
  const { width, height,scale} = Dimensions.get('window');
  console.log(width, height,scale);
  console.log(PixelRatio.get())
  //px:图片中最小的一格
  //dpi（dot per inch）:每英寸有多少小格（1px）
  //dp:在安卓开发中用的单位，1dp等于像素密度为160dpi时1px的大小。
  //dpi:120 160 240 320 480
  //    0.75 1  1.5  2   3  (1dp等于多少px)
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <View style={styles.box}></View>
        <View style={styles.box1}></View>
        
        
        
        
        <ScrollView>
          {/* <View style={{ width: 34, height: 34, backgroundColor: 'blue', overflow: 'hidden', borderRadius: 17 }}>
            <Button onPress={() => {}}
              title="+"
            />
          </View>
          <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}><Text style={{ color: '#fff', fontSize: 20 }}>+</Text></TouchableOpacity> */}

          {/* 钉钉头部搜索框 */}
          {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View>
              <Image style={{
                position: 'absolute',
                left: 10,
                top: 10,
                width: 30,
                height: 30,
                zIndex: 99
              }} source={require('./assets/icon/user.png')}></Image>
              <TextInput placeholder='点这里' style={{
                borderWidth: 0,
                width: 400,
                height: 50,
                backgroundColor: 'gray',
                borderRadius: 24,
                opacity: 0.5,
                paddingLeft: 50
              }}></TextInput>
            </View>
            <TouchableOpacity style={{
              width: 40,
              height: 40,
              backgroundColor: 'orange',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginLeft: 30,
              marginTop: 5

            }}><Text style={{ color: '#fff', fontSize: 20 }}>+</Text></TouchableOpacity>
          </View> */}


          {/* flex布局 */}
          {/* 在 rn 中，组件 默认设置了 flex 属性，默认主轴是竖轴 */}
          {/* justifyContent:定义主轴对齐方式
          alignItem:定义交叉轴对齐方式 */}
          {/* <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
          }}>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
            <View style={styles.box}>
              <Text>1</Text>
            </View> 

          </View>*/}

          {/* 受控组件  */}
          {/* <Text>{val}</Text>
          <TextInput placeholder='请输入内容' onChangeText={(val) => { setVal(val) }} style={{
            borderColor: 'red',
            height: 50,
            borderWidth: 1,
            borderRadius: 24
          }} />
          <ImageBackground style={{ width: 300, height: 300 }} source={require('./assets/客户公海.png')}>
            <View style={styles.box}></View>
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBackground> */}
          {/* 自定义组件ImageBg */}
          {/* <ImageBg source={require('./assets/客户公海.png')} style={{ width: 300, height: 300 }}>
            <View style={styles.box}></View>
            <Text style={[styles.txt, styles.size]}>hello</Text>
          </ImageBg> */}



          <View>
            {/*直接显示图片默认大小*/}
            {/* <Image source={require('./assets/icon/user.png')} /> */}
            {/*网络图片必须设置大小*/}
            {/* <Image resizeMode='center' style={{ width: 100, height: 100 }} source={{ uri: }} /> */}
          </View>
          {/* <Hello/>
          <ShowMyName name='抹叽'/>
          <Counter/> 
        */}
          {/*样式继承（把样式加到父元素），不要把样式加到view（不会继承）*/}
          {/* <View style={styles.box}>
            <Text style={[styles.txt, styles.size]}>

              <Text>inner01</Text>
              <Text>inner02</Text>
            </Text>
            <Text style={[styles.txt, styles.size]}>
              <Text>inner01</Text>
              <Text>inner02</Text>
            </Text>
          </View> */}
        </ScrollView>

        {/* <SectionList
          renderItem={({item,index,section})=><Text key={index}>{item}</Text>}
          renderSectionHeader={({section:{title}})=>(
            <Text style={{fontWeight:'bold'}}>{title}</Text>
          )}
          sections={[
            {title:'Title1',data:['item1','item2']},
            {title:'Title2',data:['item3','item4']},
            {title:'Title3',data:['item5','item6']}
          ]}
          keyExtractor={(item,index)=>item+index}
        /> */}

        {/* FlaltList */}
        {/* <FlatList
          data={da}
          onRefresh={upDateData}
          refreshing={isFresh}
          onEndReached={addData}
          renderItem={({ item, index }) => (
            <View>
              <Text>{[item.title]}</Text>
            </View>
          )}
        /> */}
      </SafeAreaView>
    </>

  );
};





export default App;
