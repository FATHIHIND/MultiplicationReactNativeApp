import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={Num1:0,Num2:0};
  }
  multiplication=()=>
   {
     var N1=parseInt(this.state.Num1);
     var N2=parseInt(this.state.Num2);

     var Res=N1*N2;
      
      
        alert('le résultat de la multiplication est: '+Res);
     
   }

  
 
  render(){
    return (
      <View style={styles.container}>
       <Text style={styles.title}>Multiplication React App {"\n"} {"\n"} {"\n"}</Text>

        <TextInput style={{borderwidth:1, margin:10}} placeholder="Numéro1" onChangeText={Num1=>this.setState({Num1})}/>
        <TextInput style={{borderwidth:1, margin:10}} placeholder="Numéro2" onChangeText={Num2=>this.setState({Num2})}/>
        <TouchableHighlight  onPress={this.multiplication} underlayColor="white">
        <View style={styles.button}>
        <Text style={styles.buttonText}>Multiplication</Text>
        </View>
         </TouchableHighlight>
      
    
   
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   paddingTop:60,
   alignItems: 'center'
  },
  button:{
    marginBottom:30,
    width:260,
    alignItems: 'center',
    backgroundColor: '#5ead97'
  },
  buttonText:{
    padding:10,
    color:'white',
    fontSize: 18
  },
  title:{
    color:'#5ead97',
    textAlign: 'center',
    fontSize:'20px',
    fontStyle : 'italic'
  }
});
