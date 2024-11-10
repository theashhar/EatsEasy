import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';

const localRestaurants = [
    {
        name: 'sher',
        image_url: 'https://source.unsplash.com/random/?car',
        rating:3.5,
    },
    {
        name: 'arsalan',
        image_url: 'https://source.unsplash.com/random/?cafe',
        rating:4.3,
    }
]

export default function RestaurantItems ({restaurantData}) {
    const colorScheme = useColorScheme();

return (
    //the ? after restaurantData is crutial || optional chaining (?.) to safely access the map function
    <TouchableOpacity activeOpacity={0.8}>
        {restaurantData?.map((restaurant, key) => (
        <View key={key} style={
            {width:'90%',
             height:260,
             backgroundColor: Colors[colorScheme ?? 'light'].boxColor,
             borderRadius: 14,
             padding:12,
             marginBottom:15,
             alignSelf:'center'
                }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
        ))}
        </TouchableOpacity>

)
}

const RestaurantImage = ({image}) => {
    return (
        <>
        <Image source= {{uri: image}}
        style={{width:'100%', height: 180, paddingHorizontal:10, borderRadius: 14, }}/>
        <TouchableOpacity 
        activeOpacity={0.5}
        style={{position:'absolute', top:15, right:20}}
        >
            <AntDesign name="hearto" color='white' size={20}  />
        </TouchableOpacity>
        
        </>
    )
}

const RestaurantInfo = ({name, rating}) => {
    const colorScheme = useColorScheme();

return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10
    }}>
        <View>
        <ThemedText type='defaultSemiBold' style= {{marginHorizontal:10,}}>{name} </ThemedText>
        <ThemedText type='mini' style= {{
            alignSelf:'start',
            marginHorizontal:5,
            marginBottom:5,
            color: Colors[colorScheme ?? 'light'].lighterInvert
        }}>  30-40 min</ThemedText>
        </View>
        <View style={{
        flexDirection: 'column',
    }}>
            <AntDesign name="star" color='gold' size={16}  />
            <ThemedText type='mini' style={{marginTop:4}}>{rating}</ThemedText>
        </View>
    </View>
)}