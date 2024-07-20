import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';


const SearchBar = ({ placeholder = 'Search...' }) => {
    const colorScheme = useColorScheme();

  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors[colorScheme ?? 'light'].lighterColor,
        borderRadius: 8,
        padding: 17,
        borderColor:'black',
        margin:10,
        borderRadius:40,
        elevation:1
      }}>
      <Ionicons name="search" size={20} color="#aaa" style={{marginRight: 10}} />
      <TextInput
        style={{
            color:Colors[colorScheme ?? 'light'].invertColor,
            flex: 1,
            fontSize: 16,
        }}
        placeholder={placeholder}
        placeholderTextColor="#aaa"

      />
    </View>
  );
};

export default SearchBar;
