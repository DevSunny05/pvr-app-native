import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import types from '../data/types'
const Header = () => {
    console.log(types)
  return (
    <View>
      <ImageBackground style={styles.image} source={{uri:'https://d18hry5vavz86j.cloudfront.net/mobilebannerimages/5ed4e3a8-adfb-463e-86c2-8cb7d183ae66_768x550.jpg'}}>
        <Pressable style={styles.box}>
            <Text style={styles.headerText}>Release in 1 days</Text>
            <View style={styles.dataContainer}>
                <View>
                    <Text style={styles.name}>VIKRANT RONA</Text>
                    <Text style={styles.lang}>U/A . KANADA</Text>
                </View>
                <Pressable style={styles.book}>
                    <Text style={styles.bookText} >BOOK</Text>
                </Pressable>
            </View>
            <Text style={styles.basicText}>Fantacy,thriller,action</Text>
            
        </Pressable>
      </ImageBackground>

      <View style={styles.typeContainer}>
        <ScrollView horizontal={true}>
            {types.map((item,index)=>(
                <View key={index} style={styles.nameContainer}>
                    <Text>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    image:{
        height:170,
        aspectRatio:5/2,
        
    },
    box:{
        position:'absolute',
        height:130,
        backgroundColor:'white',
        padding:10,
        borderRadius:7,
        top:140,
        left:20,
        width:'80%'
    },
    dataContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10
    },
    name:{
        fontSize:16,fontWeight:'bold'
    },
    lang:{
        fontSize:16,
        fontWeight:'400',
        color:'gray',
        marginTop:5
    },
    headerText:{
        fontSize:14,
        fontWeight:500,
        color:'gray'
    },
    book:{
        backgroundColor:'#ffc40c',
        padding:10,
        borderRadius:7,
        marginRight:10
    },
    bookText:{
        fontSize:16,
        fontWeight:'500',
        textAlign:'center'
    },
    basicText:{
        marginTop:6,
        fontSize:15,
        fontWeight:'500'
    },
    typeContainer:{
        marginTop:110
    },
    nameContainer:{
        margin:10
    }
})