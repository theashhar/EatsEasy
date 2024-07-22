import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, FlatList, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import ManageItemCard from '../../components/ManageItemCard';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FIREBASE_DB } from '../../FirebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Manage() {
  const colorScheme = useColorScheme();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIREBASE_DB, 'FoodItems'), (querySnapshot) => {
      const fetchedItems = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(fetchedItems);
    }, (error) => {
      console.error('Error fetching data: ', error);
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ margin: 15 }}>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 30, marginBottom: 10, backgroundColor: Colors[colorScheme ?? 'light'].mainLight }}>
        Manage Items
      </ThemedText>
      <ScrollView>
        <FlatList
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ManageItemCard
              id={item.id}
              title={item.itemName}
              category={item.itemCategory}
              img={item.imageURL}
              price={item.price}
              imageFileName={item.imageFileName}
              visible={item.visible}
            />
          )}
        />
        <View style={{ marginVertical: 64 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
