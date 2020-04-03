import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ListItem from './ListItem';
import Desc from './Desc';

//类型断言：可以确定的指定一个值的类型
//形式：
//<Type> 值 在jsx中不能用
//必须是 值 as 类型

// interface Person{
//     name:string;
//     age:number;
// }

//let user1:Person={name:'a',age:20}
// let user1={} as Person;
// user1.name ='liu';
// user1.age=18;
// user1.job='aaa'

//联合类型 或者 any类型
// function getLength(p1:string|number):number{//后面的number是返回值

//     return (p1 as string).length
// }

//类定义
//用es5方式：创建一个Person类，有name和age属性，调用的时候传入

// function Person(name:string,age:number){
//     this.name=name;
//     this.age=age;

// }
// let user = new Person('zhangsan',11);
// console.log(user)

// class Person{
//     //访问修饰符:private protected public(private修饰属性在子类不能访问，protected在类外不能访问)
//     protected name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.age=age;
//         this.name=name;
//     }
//     sayName(){

//     }
// }

//实例化方法
// class Worker extends Person{
//     job:string;
//     constructor(name:string,job:string,age:number){
//         super(name,age);
//         this.job=job (如果不用static)
//     }
// }

// let user = new Worker('zhangsan',8,'程序猿');
// console.log(user);

//静态方法
// class Worker extends Person{
//     static job:string='程序猿';
//     constructor(name:string,age:number,job:string){
//         super(name,age);
//         //this.job=job (如果不用static)
//     }
// }
// console.log(Worker.job);


// class Worker extends Person{
//     //静态属性
//     static money:number;
//     job:string='程序猿';
//     constructor(name:string,age:number,job:string){
//         super(name,age);
//         console.log(this.name)
//         //this.job=job (如果不用static)
//     }
// }
// Worker.money=1000;//可以通过这样赋值
// let user= new Worker('zang',18,'程序猿');
// console.log(user.job);
// console.log(Worker.money);



//泛型函数
// function identity<T>(arg:T):T{
//     return arg;
// }
// console.log(identity<string>('param1'))
// console.log(identity<number>(100))

// function getMsg<U>(arg:U):U{
//     return msg;
// }
//console.log(getMsg(100))

// function getMsg(msg:any):any{
//     return 'msg'; //any是任意类型，故返回值任意
// }
// console.log(getMsg(100))

// function getMsg<U>(msg:U):U[]{//写成Array<U>也行
//     return [msg]; 
// }
// console.log(getMsg<number>(100))

//泛型接口
// interface GenericIdentityFn<T>{
//     (arg:T):T;
// }

// let myIdentity:GenericIdentityFn<number>=function(arg){
//     return 100;
// }
// console.log(myIdentity(100))

//泛型类
interface Props{
    name:string;
    data:{
        id:string,
        title:string
    }
}
interface State{
    title:string
}

export default class Demo01 extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            title:'typescript'
        }
    }
    componentDidMount(){
        this.setState({title:'100'})
    }1
    render() {
        return (
            <View>
                <Text> {this.props.name} </Text>
                <ListItem name={'122'}/>
                <Desc />
            </View>
        )
    }
}
