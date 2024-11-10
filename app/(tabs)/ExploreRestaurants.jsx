import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import RestaurantItems from '../../components/RestaurantItems';
import SearchBarRestaurant from '../../components/SearchBarRestaurant';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import MyHeader from '../../components/MyHeader';
import { ThemedText } from '../../components/ThemedText';

// yelp_api_key_old= "u5Ayxrt9bKM9Cfj6g-DrffvEEVWmt4Dt9yu2Yzr14jE_7dDEXXlsM0eB3eR6F2VbegsSqxmSHx8GWXy6fDKhXy44UNV5-3Efd99ZT3n8_jqBfha1hqZBuquCp0CJZXYx"
yelp_api_key= "vBlE7OPVnTbFTcYSFAaE8McoVF63fq9lQY8Umd096RRCdtrunpznqhWm5wmJgn24ptUqjTb2yYhRToBXX8DuGwpMfMt0j_XhA1SrDwEAkx7kHYTy5Qkj9RJM75UwZ3Yx"
// search_api = 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4'

export default function ExploreRestaurants() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const colorScheme = useColorScheme();

  // Fetch data from Yelp API
  const getRestaurantsFromYelp = async (searchInput = 'San Francisco') => {
    setLoading(true); // Start loading
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${searchInput}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${yelp_api_key}`,
      },
    };

    try {
      const response = await fetch(yelpUrl, apiOptions);
      const json = await response.json();

      if (json.businesses) {
        setRestaurantData(json.businesses); // Use `businesses` instead of `business`
      } else {
        setRestaurantData([]); // Set empty data if no results found
      }
    } catch (err) {
      Alert.alert('Error', `An error occurred: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch default data on initial render
  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  const handleSearch = (searchInput) => {
    setSearchQuery(searchInput); // Set search query
    getRestaurantsFromYelp(searchInput); // Trigger search
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors[colorScheme ?? 'light'].background, flex: 1, margin: 2 }}>
      <MyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBarRestaurant onSearch={handleSearch} />
        
        {loading ? (
          <ActivityIndicator size="large" color={Colors[colorScheme ?? 'light'].primary} style={styles.loader} />
        ) : restaurantData.length > 0 ? (
          <RestaurantItems restaurantData={restaurantData} />
        ) : (
          <ThemedText type='default' style={styles.noResultsText}>Results not available or API key expired!</ThemedText>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 40,
  },
});
