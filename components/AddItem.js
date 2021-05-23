import React,{useState,useEffect} from 'react';
import {Text,View,TouchableOpacity,StyleSheet
    ,TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = (props)=>{
    const [item,setItem] = useState('')

    const onChange = (val) => setItem(val)

    useEffect(()=>{
        
    })
    
    return(
        
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Add item" value={item} onChangeText={onChange}
               
            />
            <TouchableOpacity disabled={item == ''} style={styles.btn}
                onPress={()=>{
                    props.addItem(item)
                    setItem('')
                }}
            >
             <Text style={styles.text}><Icon name="plus" size={17}/> Add New Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    input:{
        height:60,
        borderBottomColor:'#444'
    },
    btn:{
        padding:5,
        backgroundColor:'powderblue'
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:'#777'
    }
});

export default AddItem;