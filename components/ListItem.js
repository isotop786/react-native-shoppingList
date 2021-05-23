import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
const ListItem = (props)=>{
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listView}>
                <Text style={{fontSize:18}}>{props.item}</Text>
                <Icon 
                onPress={()=>props.deleteItem(props.id)}
                name="trash" style={styles.listIcon} size={20} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  listItem:{
    padding:15,
    backgroundColor:'#f8f8f8',
    borderWidth:1,
    borderColor:'#eee'
},
listView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
listText:{
    fontSize:20
},
listIcon:{
    fontSize:20,
    color:'firebrick'
}
})

export default ListItem;