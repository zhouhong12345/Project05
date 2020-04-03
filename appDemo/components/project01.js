// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TextInput,
//   Dimensions,
//   ImageBase
// } from 'react-native';

// const styles = StyleSheet.create({
//   txt: {
//     fontSize: 23,
//     paddingLeft: 21,
//     paddingRight: 21,
//     lineHeight: 50
//   },
//   a: {
//     color: 'red'
//   },
//   b: {
//     color: 'gray',
//     fontSize: 16,
//     paddingLeft: 10
//   },
//   c: {
//     color: 'red',
//     fontSize: 16,
//     paddingLeft: 10,
//     paddingTop: 10
//   },
//   ViewOne: {
//     width: 212,
//     height: 310,
//     backgroundColor: 'white',
//     marginBottom: 10
//   },
//   img: {
//     width: 212,
//     height: 220
//   }
// });

// const App = () => {
//   //实现 Tabs
//   return (
//     <>
//       <ScrollView>
//         <View style={{
//           width: Dimensions.get('window').width,
//           height: Dimensions.get('window').height,
//           alignItems: 'center',
//           backgroundColor: '#e4e4e4',
//           height: 1200,
//           width: '100%'
//         }}>
//           <View style={{
//             alignItems: 'center',
//             width: '100%',
//             height: 124,
//             backgroundColor: 'white',
//             marginBottom: 10

//           }}>
//             <Image style={{
//               position: 'absolute',
//               left: 350,
//               top: 26,
//               width: 30,
//               height: 30,
//               zIndex: 99
//             }} source={require('./assets/icon/big.png')}>

//             </Image>
//             <TextInput placeholder='请输入商品名称' placeholderTextColor='gray' style={{
//               borderWidth: 0,
//               width: 400,
//               height: 50,
//               marginTop: 15,
//               backgroundColor: '#e4e4e4',

//             }}></TextInput>
//             <View style={{
//               width: '100%',
//               height: 50,
//               //backgroundColor: 'white',
//               flexDirection: 'row',
//               borderTopWidth: 1,
//               borderBottomWidth: 1,
//               borderColor: 'gray',
//               marginTop: 10,
//               justifyContent: 'center'
//             }}>
//               <Text style={[styles.txt, styles.a]}>综合</Text>
//               <Text style={styles.txt}>销量</Text>
//               <Text style={styles.txt}>新品</Text>
//               <Text style={styles.txt}>价格</Text>
//               <Text style={styles.txt}>信用</Text>
//             </View>

//           </View>
//           <View style={{
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             justifyContent: "space-between",
//             alignItems: 'center',
//             //backgroundColor: 'green',
//             height: 1000,
//             width: 440
//           }}>
//             <View style={styles.ViewOne}>
//               <Image
//                 source={require('./assets/icon/one.png')}
//                 style={styles.img}>
//               </Image>
//               <Text style={styles.b}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
//               <Text style={styles.c}>36.00</Text>
//             </View>
//             <View style={styles.ViewOne}>
//               <Image
//                 source={require('./assets/icon/two.png')}
//                 style={styles.img}>
//               </Image>
//               <Text style={styles.b}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
//               <Text style={styles.c}>36.00</Text>
//             </View>
//             <View style={styles.ViewOne}>
//               <Image
//                 source={require('./assets/icon/one.png')}
//                 style={styles.img}>
//               </Image>
//               <Text style={styles.b}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
//               <Text style={styles.c}>36.00</Text>
//             </View>
//             <View style={styles.ViewOne}>
//               <Image
//                 source={require('./assets/icon/two.png')}
//                 style={styles.img}>
//               </Image>
//               <Text style={styles.b}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
//               <Text style={styles.c}>36.00</Text>
//             </View>
//             <View style={styles.ViewOne}>
//               <Image
//                 source={require('./assets/icon/one.png')}
//                 style={styles.img}>
//               </Image>
//               <Text style={styles.b}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
//               <Text style={styles.c}>36.00</Text>
//             </View>
//             <View style={styles.ViewOne}>
//               <Image
//                 source={require('./assets/icon/two.png')}
//                 style={styles.img}>
//               </Image>
//               <Text style={styles.b}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
//               <Text style={styles.c}>36.00</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

//export default App;