import React, { Component } from 'react'
import { Text, View } from 'react-native'

let num:number=100;

//let arr:Array<number>=[1,3]
let arr:string[]=['aaa','bbb']

//let obj:object={name:'zhangsan'}
//let obj:{name:string}={nam:'zhangsan'}
let obj:{name:string}={name:'zhangsan'}

//元祖
let tupleArr:[string,number,boolean]=['ss',2,true]

//enum Lev {one=100,two,three};
 enum Lev {one=100,two=200,three};
// enum Lev {one=100,two,three};
let myLev:Lev=Lev.two;
console.log(myLev)
//num week {ri,yi,er}

//any
let a: any='any type';//不确定类型时

//接口
interface Course{
    title:string,
    intro:string,
    num?:number,
    [propName:string]:any
}

let hybird:Course={
    title:'hybird',
    intro:'混合应用开发',
    name:100
    
}

//函数声明
//函数接口
// interface MyFunc{
//     (param1:string):boolean
// }

// let fun:MyFunc=function(pa:string){  //参数名可能会不一样
//     return true;
// }

//普通函数
// function fun(pa1:string,pa2:number):boolean{//返回值类型
//     return true;
// }
//fun(12,3);//调用（类型不同报错）

interface Person{
    age:number,
    pwd:string
}

//implements 实现
interface User extends Person{
    name:string,
}

class User1 implements User{
    name='zhangsan';
    age=20;
    pwd='1234566'
}
console.log(new User1())

//继承（extends）
//类实现接口
//接口继承接口
//接口继承类

interface User2 extends User1{
    work:string
}
let user:User2={

}

interface Props{
    name:string
}

export default class MyTs extends Component<Props> {
    render() {
        return (
            <View>
                <Text 
                  style={{fontSize:20}}
                > 
                  textInComponent{arr}{obj.name}
                </Text>
            </View>
        )
    }
}
