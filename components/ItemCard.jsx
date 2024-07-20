import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function ItemCard ({text, outerBoxColor, img}) {

return (

    <View style= {{
        width: 120,
        borderRadius: 18,
        borderColor: 'white',
        backgroundColor: outerBoxColor,
        marginHorizontal:12,
    }}>
    <View style= {{
        borderRadius: 12,
        margin:10,
        marginBottom:20,
        backgroundColor: 'white',
    }}>
        <Image source={img} 
            style={{
                width:'100%',
                height: 90,
                resizeMode: 'contain',
                padding:15,
            }} />
        </View>
            <Text style= {{
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom:10,
            fontSize: 14
        }}>{text}</Text>
    </View>

)
}