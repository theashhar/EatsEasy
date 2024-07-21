import { Image, StyleSheet, Platform, Text, View, FlatList, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MyHeader from '../../components/MyHeader';
import SearchBar from '../../components/SearchBar';
import ItemCard from '../../components/ItemCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const itemDetail = [
  {
    title: 'Hamburger',
    category: 'Burger',
    img: require('../../assets/images/burger.jpg'),
    price: '100',
  },
  {
    title: 'Margharita',
    category: 'Pizza',
    img: require('../../assets/images/pizza.jpg'),
    price: '150',
  },
  {
    title: 'Marghaasdrita',
    category: 'Pizasaza',
    img: require('../../assets/images/burger.jpg'),
    price: '1510',
  },
  {
    title: 'Dosa',
    category: 'Indian',
    img: require('../../assets/images/burger.jpg'),
    price: '1510',
  },
  {
    title: 'Dosa2',
    category: 'Indian',
    img: require('../../assets/images/pizza.jpg'),
    price: '1510',
  },
];

export default function HomeScreen() {
  const numColumns = 2
  return (
    <SafeAreaView style={{marginBottom:80}}>
      <MyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.margin}>
          <ThemedText type="title">Customize</ThemedText>
          <ThemedText type="title">Your Favourite Food</ThemedText>
        </View>
        <SearchBar />
        <ThemedText  style={styles.margin} type="defaultSemiBold">Food Listing</ThemedText>
        <FlatList
          key={numColumns}
          scrollEnabled={false}
          data={itemDetail}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ItemCard
              title={item.title}
              category={item.category}
              img={item.img}
              price={item.price}
            />
          )}
          numColumns={numColumns}
          contentContainerStyle={styles.listContainer}
        />
        <View style={{marginVertical:36}}>
        </View>
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
    width:'100%',
    flex: 1,
    alignItems:'center'

  },
});
