import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
// import {v4 as uuid} from 'uuidv4'


import Header from './components/Header'
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = ()=>{

  const [item, setItem] = useState([
    {id: Math.random()*1000+1, text:'Milk'},
    {id: Math.random()*1000+1, text:'Eggs'},
    {id: Math.random()*1000+1, text:'Bread'},
    {id: Math.random()*1000+1, text:'Joice'},
   
  ])

  // delete item

  const deleteItem = (id)=>{
    setItem(preItem=>{
      return preItem.filter(item => item.id !== id)
    })
  }

  // add Item 
  const addItem = (item)=>{
    const id = Math.random()*1000+1
   setItem(preItem=>{
     return [{id,text:item},...preItem]
   })
  //  alert(item)
  }



  return(
    <View style={styles.container}>
     <Header title="Shopping List"/>
     <AddItem addItem={addItem}/>
     <FlatList
     data={item}

     renderItem={({item})=> <ListItem deleteItem={deleteItem} id={item.id} item={item.text}/> }
     />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,   
  },
  item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default App;