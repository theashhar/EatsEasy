import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, Pressable, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { doc, deleteDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../FirebaseConfig'; 

export default function ManageItemCard({ id, title, category, img, price }) {
    const colorScheme = useColorScheme();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleDelete = async () => {
        try {
            await deleteDoc(doc(FIREBASE_DB, 'FoodItems', id));
            alert('Item deleted successfully');
        } catch (error) {
            console.error('Error deleting item: ', error);
            alert('Failed to delete item');
        }
    };

    return (
        <ThemedView
            style={{
                marginTop: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                alignSelf: 'center',
                borderRadius: 15,
                elevation: 2,
                backgroundColor: Colors[colorScheme ?? 'light'].boxColor,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={{ uri: img }} // Change 'src' to 'source' and use 'uri' for URL
                    style={{
                        width: 80,
                        height: 80,
                        margin: 8,
                        resizeMode: 'cover',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: Colors[colorScheme ?? 'light'].invertColor,
                    }} 
                />
                <View style={{ width: '60%' }}>
                    <ThemedText type='defaultSemiBold' style={{ margin: 8, marginBottom: 0 }}>{title}</ThemedText>
                    <ThemedText type='mini' style={{ marginHorizontal: 8, paddingVertical: 0, color: Colors[colorScheme ?? 'light'].lighterInvert }}>{category}</ThemedText>
                    <ThemedText type='subtitle' style={{ margin: 8 }}>{price}</ThemedText>
                </View>
            </View>
            <Pressable
                style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    backgroundColor: Colors[colorScheme ?? 'light'].tint,
                    borderRadius: 20,
                    padding: 4
                }}
                onPress={handleDelete} // Use handleDelete to remove item
            >
                <Ionicons name="trash-bin" size={16} color='#F53333' />
            </Pressable>
            <Switch
                style={{
                    position: 'absolute',
                    right: 2,
                    bottom: 0,
                }}
                trackColor={{ false: Colors.dark.lighterInvert, true: Colors[colorScheme ?? 'light'].invertColor }}
                thumbColor={isEnabled ? Colors.dark.mainColor : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </ThemedView>
    );
}
