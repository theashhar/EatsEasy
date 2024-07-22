import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import MyHeader from '../../components/MyHeader';
import SearchBar from '../../components/SearchBar';
import ItemCard from '../../components/ItemCard';
import { FIREBASE_DB } from '../../FirebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const numColumns = 2;

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIREBASE_DB, 'FoodItems'), (querySnapshot) => {
      const fetchedItems = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })).filter(item => item.visible); // Filter items to include only those with visible: true
      setItems(fetchedItems);
    }, (error) => {
      console.error('Error fetching data: ', error);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ marginBottom: 80 }}>
      <MyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.margin}>
          <ThemedText type="title">Customize</ThemedText>
          <ThemedText type="title">Your Favourite Food</ThemedText>
        </View>
        <SearchBar />
        <ThemedText style={styles.margin} type="defaultSemiBold">Food Listing</ThemedText>
        <FlatList
          key={numColumns}
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemCard
              title={item.itemName}
              category={item.itemCategory}
              img={item.imageURL}
              price={item.price}
            />
          )}
          numColumns={numColumns}
          contentContainerStyle={styles.listContainer}
        />
        <View style={{ marginVertical: 36 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  listContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },
});
