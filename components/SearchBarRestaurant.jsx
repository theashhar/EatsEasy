import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const SearchBarRestaurant = ({ placeholder = 'example "London"...', onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const colorScheme = useColorScheme();

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      onSearch(searchInput.trim());
      setSearchInput('');  // Clear the input after search
    }
  };

  return (
    <View style={[styles.searchContainer, {backgroundColor: Colors[colorScheme ?? 'light'].lighterColor} ]}>
      <Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
      <TextInput
        style={ {flex: 1,fontSize: 16, color: Colors[colorScheme ?? 'light'].invertColor}}
        placeholder={placeholder}
        value={searchInput}
        onChangeText={setSearchInput}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity onPress={handleSearch} style={{
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: Colors[colorScheme ?? 'light'].mainLight,
    borderRadius: 30,
    marginLeft: 10
    }}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    padding: 12,
    borderColor: 'black',
    margin: 10,
    elevation: 1,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SearchBarRestaurant;
