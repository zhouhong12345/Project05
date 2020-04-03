import React, { Component } from 'react'
import {View,Image,StyleSheet} from 'react-native';

export default class ImageBg extends Component {
    render() {
        let {style,source,children}=this.props;
        return (
            <View style={style}>
                <Image source={source} style={[style,styles.absoluteImg]}/>
                {children}
            </View>
        )
    }
}
//在rn中，每个组件都默认设置了position：relative
const styles=StyleSheet.create({
    absoluteImg:{
        position:'absolute',
        left:0,
        top:0,
    }
})
