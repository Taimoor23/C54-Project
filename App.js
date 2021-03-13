import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
   displayAlert1 = () =>{
    alert("Currently going to be played is Sound 1");
  }

   displayAlert2 = () =>{
    alert("Currently going to be played is Sound 1");
  }

   displayAlert3 = () =>{
    alert("Currently going to be played is Sound 1");
  }

   displayAlert4 = () =>{
    alert("Currently going to be played is Sound 1");
  }

   displayAlert5 = () =>{
    alert("Currently going to be played is Sound 1");
  }
  
   displayAlert6 = () =>{
    alert("Currently going to be played is Sound 1");
  }
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Button color="red" title="sound 1" onPress={this.displayAlert1}/>
        <Text> </Text>
        
        <Text> </Text>
        <Button color="orange" title="sound 2" onPress={this.displayAlert2}/>
        <Text> </Text>
        
        <Text> </Text>
        <Button color="yellow" title="sound 3" onPress={this.displayAlert3}/>
        <Text> </Text>
       
        <Text> </Text>
        <Button color="green" title="sound 4" onPress={this.displayAlert4}/>
        <Text> </Text>
       
        <Text> </Text>
        <Button color="blue" title="sound 5" onPress={this.displayAlert5}/>
        <Text> </Text>
       
        <Text> </Text>
        <Button color="purple" title="sound 6" onPress={this.displayAlert6}/>
      </View>
    );
  }
}