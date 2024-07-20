import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
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
        // paddingHorizontal: 10,
        padding: 20,
        marginVertical: 10,
        borderColor:'black',
        margin:10,
        borderRadius:40
      }}>
      <Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
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

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  input: {

  },
});

export default SearchBar;
