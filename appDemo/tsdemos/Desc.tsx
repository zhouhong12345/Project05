import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

//装饰器其实就是一个函数，在函数里可以写一些新的逻辑，
//包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去。
//高阶组件--其实就是一个函数，就是装饰器
//@expr 语法其实是语法糖

// function helloWord(target:any) {
//     console.log('hello Word!');
// }

// // @helloWord
// class helloWordClass{
//     sayHello(){

//     }
// }

//类装饰器
//不带参数
// function addUrl(target:any){
//     target.prototype.url='http://'
// }
// @addUrl
// class HomeServer{
//     url:any;
//     getData(){
//         console.log(this.url)
//     }
// }
// let home=new HomeServer();
// home.getData()

// class UserServer{
//     getInfor(){

//     }
// }

//带参数装饰器
// function addUrl(url:string){
//     return function(target:any){//这才是装饰器
//         target.prototype.url=url
//         // return class extends target{  //如果没有返回值，target指的就是homeserver类
//         //     name:string='hhh'
//         // }
//     }
// }
// @addUrl('http://www.baidu.com')
// class HomeServer{
//     url:string | undefined;
//     getData(){
//         console.log(this.url)
//     }
// }
// let home=new HomeServer();
// home.getData()

//方法装饰器
// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         target是类原型对象
//         target.name='liu'//在原型上直接加一个属性
//         console.log(descriptor)
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     console.log(new Greeter('world').name)
//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }		
// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//     };
// }
// function log(target:any,methodName:string,des:PropertyDescriptor){
//     var oldVal=des.value ;     //原来的函数
//     des.value=function(){
//         console.log(methodName+'被调用');
//         return oldVal.apply(this,[...arguments]);
//     }
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
    
//     @enumerable(false)
//     @log
//     greet(msg:string) {
//         return "Hello, " + this.greeting+msg;
//     }
// }
// let msg=new Greeter('world').greet('greet 参数')
// console.log(msg)

//属性装饰器
// function DefaultValue(value: string) {
//     return function (target: any, propertyName: string) {
//         target[propertyName] = value;
//     }
// }

// class Hello {
//     @DefaultValue("Hello") //在属性加装饰器
//     greeting: any;
// }

// console.log('属性装饰器'+new Hello().greeting);

//参数装饰器
//略

//装饰器组合
function enumerable(value: boolean) {
    console.log('enum call')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('enum dec call')
        descriptor.enumerable = value;
    };
}
function log(target:any,methodName:string,des:PropertyDescriptor){
    console.log('log call')
    var oldVal=des.value ;     //原来的函数
    des.value=function(){
        console.log(methodName+'被调用');
        return oldVal.apply(this,[...arguments]);
    }
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    
    @enumerable(false)     //装饰器组合
    @log
    greet(msg:string) {
        return "Hello, " + this.greeting+msg;
    }
}
let msg=new Greeter('world').greet('greet 参数')
console.log(msg)

// function setStatusBar(color:string){
//     return function(WrapComponent:any){
//         return class extends Component{
//             render(){
//                 return(
//                     <>
//                     <View style={{height:30,backgroundColor:color}}></View>
//                     <WrapComponent />
//                     </>
//                 )
//             }
//         }
//     }
// }
// @setStatusBar('red')
export default class Desc extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

