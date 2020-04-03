import { Component } from "react"
import { View } from "react-native"
import Demo from "./Demo"

TypeScript 总结
基础类型
number、string、boolean、

Array（number[ ]）、object

Tuple（元组 ）、enum（枚举）

any、void、null 、undefined

let isDone: boolean = false;

1.接口（interface）：描述一个对象的取值规范，不实现具体的对象

接口分三类：属性接口、函数接口、类接口

属性接口实例代码：
interface User{
    name:string;
    age:number;
}
const user1:User={
    name:'zhangsan',
    age:20
};

跨组件的属性接口：
MyTs.tsx核心代码：
...
interface Props{
    name:string;
}

export default class MyTS extends Component<Props>{
    render(){
        return(
            <View>
                <Text>hello</Text>
            </View>
        )
    }
}
Demo.tsx核心代码：
...
import MyTs from './MyTs'

export default class Demo extends Component {
    render() {
        return (
            <View>
                <MyTs name={'zhouhong'}/>错误的
            </View>
        )
    }
}


函数接口实例代码：
interface MyFunc{
    (param1:string):boolean
}

let fun:MyFunc=function(pa:string){  //参数名可能会不一样
    return true;
}

类接口：
interface Person{
    age:number,
    pwd:string
}

interface User extends Person{  //User类继承Person类
    name:string,
}

class User1 implements User{
    name='zhangsan';
    age=20;
    pwd='1234566'
}
console.log(new User1())

2.
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据

三种泛型：泛型函数、泛型接口、泛型类

泛型函数实代码：
(1)
function identity<T>(arg:T):T{
    return arg;
}
identity<string>('hello')
identity<number>(100)

(2)
function getMsg(msg:any):any{
    return 'msg'; //any是任意类型，故返回值任意
}
console.log(getMsg(100))
(3)
function getMsg<U>(msg:U):U[]{//写成Array<U>也行
    return [msg]; 
}
console.log(getMsg<number>(100))

泛型接口实例代码:
interface GenericIdentityFn<T>{
    (arg:T):T;
}

let myIdentity:GenericIdentityFn<number>=function(arg){
    return 100;
}
console.log(myIdentity(100))

泛型类实例代码：
class AddData<T>{
    list:T[]=[];
    //num:number;
    add(data:T):T[]{
        this.list.push(data);
        return this.list;
    }
}
let data1=new AddData<number>()
data1.list.push(1)

3.装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上。 装饰器使用@expression这种形式，
expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
通俗讲其实就是一个函数，在函数里可以写一些新的逻辑，
包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去。
高阶组件--其实就是一个函数，就是装饰器

定义：
// 普通装饰器（无参数）
function helloWord(target: any) {
    console.log('hello Word!');
}
@helloWord
class HelloWordClass {

}
// 装饰器工厂 （带参数）
function helloWord(p:string) {
    return function (target) { //真正的装饰器
         console.log(p)
    }
}
@helloWord('hello')
class HelloWordClass {

}

装饰器分三类：类装饰器、方法装饰器、属性装饰器、参数装饰器

类装饰器：
参数是类的构造函数
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
实例代码：
不带参数
function addUrl(target:any){
    target.prototype.url='http://'
}
@addUrl
class HomeServer{
    url:any;
    getData(){
        console.log(this.url)
    }
}
let home=new HomeServer();
home.getData()

class UserServer{
    getInfor(){

    }
}
带参数装饰器
function addUrl(url:string){
    return function(target:any){//这才是装饰器
        target.prototype.url=url
        // return class extends target{  //如果没有返回值，target指的就是homeserver类
        //     name:string='hhh'
        // }
    }
}
@addUrl('http://www.baidu.com')
class HomeServer{
    url:string | undefined;
    getData(){
        console.log(this.url)
    }
}
let home=new HomeServer();
home.getData()


方法装饰器：
方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2、成员的名字。
  3、成员的属性描述符。
实例代码：
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
function log(target:any,methodName:string,des:PropertyDescriptor){
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
    
    @enumerable(false)
    @log
    greet(msg:string) {
        return "Hello, " + this.greeting+msg;
    }
}
let msg=new Greeter('world').greet('greet 参数')
console.log(msg)

属性装饰器：

属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
  1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  2、成员的名字

实例代码：
function DefaultValue(value: string) {
    return function (target: any, propertyName: string) {
        target[propertyName] = value;
    }
}

class Hello {
    @DefaultValue("Hello") //在属性加装饰器
    greeting: any;
}

console.log('属性装饰器'+new Hello().greeting);

参数装饰器：
参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2、成员的名字。
  3、参数在函数参数列表中的索引。
实例代码：
略，就是在某参数前加装饰器调用

装饰器组合：
当多个装饰器应用在一个声明上时会进行如下步骤的操作：
  由上至下依次对装饰器表达式求值。
  求值的结果会被当作函数，由下至上依次调用
实例代码：
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
