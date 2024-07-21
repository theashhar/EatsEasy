import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, ScrollView } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import ManageItemCard from '../../components/ManageItemCard';
import { Colors } from '@/constants/Colors';

export default function Manage() {
  return (
    <SafeAreaView style={{margin:15}}>
        <ThemedText type='defaultSemiBold' style={{alignSelf:'center', paddingHorizontal:18, paddingVertical:8, borderRadius:30, marginBottom:10, backgroundColor:Colors.dark.mainLight}}>Manage Items</ThemedText>
      <ScrollView>
        <ManageItemCard />
        <ManageItemCard />
        <ManageItemCard />
        <ManageItemCard />
        <ManageItemCard />
        <ManageItemCard />
        <ManageItemCard />
        <ManageItemCard />
        <ManageItemCard />
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
