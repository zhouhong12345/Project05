import React, { Component } from 'react'
import { AsyncStorage, Text, View, StyleSheet, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';


const { width } = Dimensions.get('window')
const w = width / 3;

const styles = StyleSheet.create({
    img: {
        width: 40,
        height: 40
    },
    txt: {
        fontSize: 19,
        marginTop: 10
    },
    select: {
        width: w,
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})
const choseone = [
    {
        img: require('../../assets/icon/images/guanli.png'),
        title: '账户管理'
    },
    {
        img: require('../../assets/icon/images/dingwei.png'),
        title: '收货地址'
    },
    {
        img: require('../../assets/icon/images/xinxi.png'),
        title: '我的信息'
    },
    {
        img: require('../../assets/icon/images/dingdan.png'),
        title: '我的订单'
    },
    {
        img: require('../../assets/icon/images/erweima.png'),
        title: '我的二维码'
    },
    {
        img: require('../../assets/icon/images/jifen.png'),
        title: '我的积分'
    },
    {
        img: require('../../assets/icon/images/shoucang.png'),
        title: '我的收藏'
    }
]
const chosetwo = [
    {
        img: require('../../assets/icon/images/weixiu.png'),
        title: '居家维修保养'
    },
    {
        img: require('../../assets/icon/images/che.png'),
        title: '出行接送'
    },
    {
        img: require('../../assets/icon/images/ren.png'),
        title: '我的受赠人'
    },
    {
        img: require('../../assets/icon/images/chuang.png'),
        title: '我的住宿优惠'
    },
    {
        img: require('../../assets/icon/images/huodong.png'),
        title: '我的活动'
    },
    {
        img: require('../../assets/icon/images/fabu.png'),
        title: '我的发布'
    }
]

const options = {
    title: 'Select Avatar',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class me extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: ''
        };
    }
    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didiCancel) {
                return;
            } else if (response.error) {
                console.log('Error', response.error);
            } else if (response.customButton) {
                console.log('custom', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                });
                this.savephoto(this.state.imageUrl);
            }
        })

        console.log('a')
    }
    //存储照片
    savephoto = (value) => {
        AsyncStorage.setItem('photo', JSON.stringify(value), () => {

        });
    }
    //加载照片
    componentDidMount() {
        AsyncStorage.getItem('photo', (err, result) => {
            if (JSON.parse(result) == '') {
                this.setState({
                    imageUrl: ''
                })
            }
            else {
                this.setState({
                    imageUrl: JSON.parse(result)
                })
            }
        })
    }
    componentDidUpdate() {
        AsyncStorage.getItem('photo', (err, result) => {
            if (JSON.parse(result) == '') {
                this.setState({
                    imageUrl: ''
                })
            }
            else {
                this.setState({
                    imageUrl: JSON.parse(result)
                })
            }
        })
    }
    render() {
        console.log(this.state.imageUrl)
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#f23030', height: 300, flexDirection: 'column', alignItems: 'center', paddingTop: 50 }}>
                    <TouchableOpacity onPress={() => { this.takephoto() }}>
                        <View
                            style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Image
                                style={{ width: 115, height: 115, borderRadius: 60 }}
                                source={this.state.imageUrl}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>BINNU DHILLON</Text>
                </View>
                <View style={{ backgroundColor: 'white', height: 390, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, borderBottomColor: '#aeaeae', borderBottomWidth: 1 }}>
                        <Image
                            style={{ width: 40, height: 40, marginLeft: 15, marginRight: 15 }}
                            source={require('../../assets/icon/images/me.png')}
                        />
                        <Text style={{ fontSize: 19 }}>我的个人中心</Text>
                    </View>
                    <FlatList
                        data={choseone}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={styles.select}>
                                <Image
                                    style={styles.img}
                                    source={item.img}
                                />
                                <Text style={styles.txt}>{item.title}</Text>
                            </View>
                        )}
                    >
                    </FlatList>
                </View>
                <View style={{ height: 290, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, borderBottomColor: '#aeaeae', borderBottomWidth: 1 }}>
                        <Image
                            style={{ width: 40, height: 40, marginLeft: 15, marginRight: 15 }}
                            source={require('../../assets/icon/images/biaoqian.png')}
                        />
                        <Text style={{ fontSize: 19 }}>E族活动</Text>
                    </View>
                    <FlatList
                        data={chosetwo}
                        numColumns={3}
                        renderItem={({ item, index }) => {
                            if (index !== 5) {
                                return (
                                    <View style={styles.select}>
                                        <Image
                                            style={styles.img}
                                            source={item.img}
                                        />
                                        <Text style={styles.txt}>{item.title}</Text>
                                    </View>
                                )
                            } else {
                                return (
                                    <TouchableOpacity onPress={() => Actions.release()} style={styles.select}>
                                        <Image
                                            style={styles.img}
                                            source={item.img}
                                        />
                                        <Text style={styles.txt}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        }}
                    >
                    </FlatList>
                </View>
                <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'gray' }}>BINNU DHILLON  |  退出</Text>
                </View>
            </ScrollView>
        )
    }
}
