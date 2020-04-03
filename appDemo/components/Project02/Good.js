import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    BackHandler,
    FlatList,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


const { width, scale } = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/good1.png')
    },

    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/good1.png')
    },

    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/good1.png')
    },

    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/good1.png')
    },

    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../../assets/good1.png')
    }
]

export default class LoadPage extends Component {
    constructor() {
        super();
        this.state = {
            tits: []
        }
    }
    componentDidMount(){
        BackHandler.addEventListener('back',()=>{
            console.log('back');
            BackHandler.exitApp();
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* <StatusBar backgroundColor='red'/>
                <TextInput placeholderTextColor='gray'/> */}
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder="请输入商品名称"
                            placeholderTextColor='gray'
                            style={{ 
                                width: 490 * s,
                                height: 50 * s ,
                                padding:0,
                                paddingLeft:10
                            }} />
                        <Icon name='search' />
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={{color:'red'}}>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>销量</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>价格</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>信用</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{ backgroundColor: '#F4F4F4' }}
                    data={goods}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.good}>
                            <Image
                              resizeMode="contain"
                              style={{height:180*s,marginTop:60*s}}
                              source={item.img}
                            />
                            <Text
                              style={{marginTop:20}}
                            >{item.title}</Text>
                            <Text
                              style={{width:'100%',color:'red'}}
                            >{item.price}</Text>
                        </View>
                    )}
                >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 70 * s,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        width: 544 * s,
        height: 50 * s,
        backgroundColor: "#EEEEEE",
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav: {
        height: 73 * s,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around'

    },
    good:{
        width:290*s,
        backgroundColor:'#fff',
        marginLeft:20*s,
        marginTop:20*s,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
        alignItems:'center'
    }
})