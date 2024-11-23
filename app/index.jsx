import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web'

const Home = () => {
// Variable Declaration
let [inputValue,setInputValue] = useState('');
let [todo,setTodo] = useState([]);

// add todo
function addTodo(){
console.log(inputValue);
todo.push(inputValue);
setTodo([...todo]);
console.log(todo);
}

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.formContainer}>
      <Text style={styles.heading}>Todo App</Text>
      <TextInput placeholder='Enter Todo' style={styles.todoInput} onChangeText={setInputValue} value={inputValue}/>
     <Button title='Add Todo' onPress={addTodo}></Button>
    </View>

    <View style={{marginTop:10}}>
   {todo.length > 0 ? <FlatList
   data={todo}
   renderItem={({item,index})=>{
    return <View>
        <Text>{item}</Text>
    </View>
   }} keyExtractor={(item,index) =>index.toString()}
   >
    
    </FlatList> : null}
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    para:{
        fontSize:20,
    },
    todoInput:{
        fontSize:20,
        padding:10,
        borderColor:'black',
        borderWidth:2,
    },
    formContainer:{
        width:350,
        padding:5,
        marginLeft:'auto',
        marginRight:"auto"
    }

})

export default Home