import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, ScrollView, FlatList } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import ManageItemCard from '../../components/ManageItemCard';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect, useState } from 'react';
import { FIREBASE_DB } from '../../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function Manage() {
  const colorScheme = useColorScheme();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(FIREBASE_DB, 'FoodItems'));
        const fetchedItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [items]);

  return (
    <SafeAreaView style={{margin:15}}>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 30, marginBottom: 10, backgroundColor: Colors[colorScheme ?? 'light'].mainLight }}>Manage Items</ThemedText>
      <ScrollView>
      <FlatList
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ManageItemCard
              title={item.itemName}
              category={item.itemCategory}
              img={item.imageURL}
              price={item.price}
            />
          )}
        />

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
