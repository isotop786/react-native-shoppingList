import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const Header = ({title})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:60,
        backgroundColor:'steelblue',
        padding:15
    },
    text:{
        color:'#eee',
        fontSize:23,
        
        textAlign:'center'
    }
})

export default Header;