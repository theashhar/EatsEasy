import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; // You can use any icon library
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

export default function ItemCard ({title, category, img, price}) {
    const colorScheme = useColorScheme();
return (

    <View style= {{
        width: 150,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: Colors[colorScheme ?? 'light'].boxColor,
        marginHorizontal:12,
        elevation:2,
        position:'relative',
        margin:10,
    }}>
        <View style= {{
            borderRadius: 8,
            margin:10,
            backgroundColor: 'white',
        }}>
            <Image src={img} 
                style={{
                    width:'100%',
                    height: 120,
                    resizeMode: 'cover',
                    borderRadius: 8,
                }} />
        </View>
                <ThemedText type='defaultSemiBold' style= {{
                marginHorizontal:10,
            }}>{title} </ThemedText>

                <ThemedText type='mini' style= {{
                alignSelf:'start',
                marginHorizontal:5,
                marginBottom:5,
                color: Colors[colorScheme ?? 'light'].lighterInvert
            }}>  {category}</ThemedText>

                <ThemedText type='subtitle'  style= {{
                margin:6,
                // paddingBottom:6,
            }}> Rs {price}</ThemedText>
                  <MaterialIcons style={{
                    position: 'absolute',
                    bottom:0,
                    right:0,
                    // backgroundColor: Colors.dark.mainColor,
                    margin:6,
                    // borderRadius: 4,
                    }} name="add-circle" size={25} color={Colors.dark.mainColor} />

    </View>

)
}