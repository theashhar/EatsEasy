import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MyHeader  from '../../components/MyHeader';
import SearchBar  from '../../components/SearchBar';
import ItemCard  from '../../components/ItemCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
<SafeAreaView >
    <MyHeader />
    <View style={styles.margin} >      
      <ThemedText  type='title' >Customize</ThemedText>
      <ThemedText  type='title' >Your Favourite Food</ThemedText>
    </View>
    <SearchBar />
    <ThemedText style={styles.margin} type='defaultSemiBold' >Food Listing</ThemedText>

    <ItemCard text='Discussion' outerBoxColor='#ffe6b2' img={require('../../assets/images/burger.jpg')} />
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  margin: {
    marginVertical:20,
    marginHorizontal:15
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
