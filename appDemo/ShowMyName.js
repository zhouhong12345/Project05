import React,{Component} from 'react';

import {View,Text} from 'react-native';

 export default class ShowMyName extends Component{
   render(){
     return(
       <View>
          <Text>hello{this.props.name}</Text>
       </View>
     )
   }
 }



  // const ShowMyName = (props) => {
  //   return (
  //     <View>
  //           <Text>Hello{props.name}</Text>
  //     </View>
  //   );
  // };
  // export default ShowMyName;