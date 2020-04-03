import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';

export default class Mylist extends Component {
    constructor() {
        super()
        this.state = {
            data: [1, 2, 3, 4, 5, 6],
            isload: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isload: true
            })
        }, 1000)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    this.state.isload ? (
                        this.state.data.map((item) => (
                            <Text key={item}>{item}</Text>
                        ))
                    ) : <ActivityIndicator color='red' size="large" />
                }
            </View>
        )

        //     if (this.state.isload) {
        //         return (
        //             <View>
        //                 {
        //                     this.state.data.map((item) =>
        //                         <Text key={item}>{item}</Text>
        //                     )
        //                 }
        //             </View>
        //         )
        //     } else {
        //         return (
        //             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //                 <ActivityIndicator color='red' size="large" />
        //             </View>


        //         )
        //     }
        // }
    }
}