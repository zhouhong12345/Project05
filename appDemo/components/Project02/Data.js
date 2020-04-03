import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let page = this.props.p;
        // console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?page=' + page + '&limit=10')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps.p,this.props.p);
        if (prevProps.p !== this.props.p) {
            let page = this.props.p;
            fetch('https://cnodejs.org/api/v1/topics?page=' + page + '&limit=10')
                .then((res) => res.json())
                .then(res => {
                    this.setState({
                        data: res.data
                    })
                })
        }
    }
    render() {
        var arr = ['已回复', '待回复'];
        return (
            <View>
                {
                    this.state.data.map((item) => {
                        if (item.title.length > 15) {
                            var n = Math.floor(Math.random() * arr.length);
                            if (arr[n] == '待回复') {
                                return (
                                    <View style={{ paddingRight: 20, paddingLeft: 20, borderBottomColor: '#eeeeee', borderBottomWidth: 1, height: 50, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 310 }}>
                                            <Text style={{ fontSize: 15 }}>{item.title.substring(0, 15)}...</Text>
                                        </View>
                                        <Text style={{ marginRight: 20 }}>{item.create_at.slice(0, 10)}</Text>
                                        <Text style={{ color: 'red' }}>{arr[n]}</Text>
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={{ paddingRight: 20, paddingLeft: 20, borderBottomColor: '#eeeeee', borderBottomWidth: 1, height: 50, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 310 }}>
                                            <Text style={{ fontSize: 15 }}>{item.title.substring(0, 15)}...</Text>
                                        </View>
                                        <Text style={{ marginRight: 20 }}>{item.create_at.slice(0, 10)}</Text>
                                        <Text>{arr[n]}</Text>
                                    </View>
                                )
                            }
                        } else {
                            var n = Math.floor(Math.random() * arr.length);
                            if (arr[n] == '待回复') {
                                return (
                                    <View style={{ paddingRight: 20, paddingLeft: 20, borderBottomColor: '#eeeeee', borderBottomWidth: 1, height: 50, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 310 }}>
                                            <Text style={{ fontSize: 15 }}>{item.title}</Text>
                                        </View>
                                        <Text style={{ marginRight: 20 }}>{item.create_at.slice(0, 10)}</Text>
                                        <Text style={{ color: 'red' }}>{arr[n]}</Text>
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={{ paddingRight: 20, paddingLeft: 20, borderBottomColor: '#eeeeee', borderBottomWidth: 1, height: 50, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 310 }}>
                                            <Text style={{ fontSize: 15 }}>{item.title}</Text>
                                        </View>
                                        <Text style={{ marginRight: 20 }}>{item.create_at.slice(0, 10)}</Text>
                                        <Text>{arr[n]}</Text>
                                    </View>
                                )
                            }
                        }
                    })
                }
            </View>
        )
    }
}

