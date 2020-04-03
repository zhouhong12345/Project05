import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, Dimensions, FlatList, ScrollView, Button } from 'react-native';
import { Carousel } from '@ant-design/react-native';


const { width } = Dimensions.get('window');
const list = [
    {
        title: '居家维修保养',
        img: require('../../assets/icon/images/circleone.png')
    },
    {
        title: '住宿优惠',
        img: require('../../assets/icon/images/circletwo.png')
    },
    {
        title: '出行接送',
        img: require('../../assets/icon/images/circlethree.png')
    },
    {
        title: 'E族活动',
        img: require('../../assets/icon/images/circlefour.png')
    }

]

export default class serve extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.inner}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../assets/icon/images/sousuo.png')}
                        />
                        <TextInput
                            placeholder='请输入您要搜索的关键字'
                            placeholderTextColor='#fff'
                            style={{
                                fontSize: 20,
                                width: 310,
                                height: 50
                            }}
                        />
                    </View>
                    <Image
                        style={{ width: 40, height: 40, marginLeft: 15 }}
                        source={require('../../assets/icon/images/gouwuche.png')}
                    />
                </View>
                <Carousel
                    infinite={true}
                    autoplay={true}
                    dotStyle={{ width: 13, height: 13, marginLeft: 15, backgroundColor: 'white' }}
                    dotActiveStyle={{ backgroundColor: 'red' }}
                >
                    <View >
                        <Image
                            style={{ width: width }}
                            source={require('../../assets/icon/images/new.png')} />
                    </View>
                    <View >
                        <Image
                            style={{ width: width }}
                            source={require('../../assets/icon/images/new.png')} />
                    </View>
                    <View >
                        <Image
                            style={{ width: width }}
                            source={require('../../assets/icon/images/new.png')} />
                    </View>
                </Carousel>
                <FlatList
                    data={list}
                    style={{ backgroundColor: '#ebebeb' }}
                    renderItem={({ item }) => (
                        <View style={styles.list}>
                            <Image
                                style={{ height: 90, width: 90 }}
                                source={item.img}
                            />
                            <Text
                                style={{ fontSize: 18, color: 'gray', marginLeft: 40}}
                            >{item.title}</Text>
                            <Image 
                                style={{position:'absolute',right:-10}}
                                source={require('../../assets/icon/images/jiantou.png')}
                            />
                        </View>
                    )}
                >
                </FlatList>
                <View style={{ height: 150, flexDirection: 'column', justifyContent: 'center', paddingTop: 30, alignItems: 'center' }}>
                    <View style={styles.but}>
                        <Text style={{ fontSize: 18, color: 'white' }}>发布需求</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'gray' }}>©E族之家 版权所有</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 65,
        backgroundColor: '#f23030',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inner: {
        width: 380,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.6)',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingLeft: 30,
        marginLeft: 20
    },
    list: {
        height: 100,
        backgroundColor: '#fff',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 30
    },
    but: {
        width: 410,
        height: 60,
        backgroundColor: "#f23030",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: 30
    }
});