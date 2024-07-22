import React, { useState } from 'react';
import { View, Image, Pressable, Switch, Alert, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_STORAGE } from '../FirebaseConfig';
import { ref, deleteObject } from 'firebase/storage';

export default function ManageItemCard({ id, title, category, img, price, imageFileName, visible }) {
    const colorScheme = useColorScheme();
    const [isEnabled, setIsEnabled] = useState(visible);

    const toggleSwitch = async () => {
        try {
            setIsEnabled(previousState => !previousState);
            const itemRef = doc(FIREBASE_DB, 'FoodItems', id);
            await updateDoc(itemRef, { visible: !isEnabled });
        } catch (error) {
            console.error('Error updating visibility: ', error);
        }
    };

    const handleDelete = () => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this item?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        try {
                            await deleteDoc(doc(FIREBASE_DB, 'FoodItems', id));
                            const imageRef = ref(FIREBASE_STORAGE, `FoodItems/${imageFileName}`);
                            await deleteObject(imageRef);
                            ToastAndroid.show('Item and image deleted successfully', ToastAndroid.SHORT);
                        } catch (error) {
                            console.error('Error deleting item or image: ', error);
                            ToastAndroid.show('Failed to delete item or image', ToastAndroid.SHORT);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <ThemedView style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', alignSelf: 'center', borderRadius: 15, elevation: 2, backgroundColor: Colors[colorScheme ?? 'light'].boxColor }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: img }} style={{ width: 80, height: 80, margin: 8, resizeMode: 'cover', borderRadius: 10, borderWidth: 1, borderColor: Colors[colorScheme ?? 'light'].invertColor }} />
                <View style={{ width: '60%' }}>
                    <ThemedText type='defaultSemiBold' style={{ margin: 8, marginBottom: 0 }}>{title}</ThemedText>
                    <ThemedText type='mini' style={{ marginHorizontal: 8, paddingVertical: 0, color: Colors[colorScheme ?? 'light'].lighterInvert }}>{category}</ThemedText>
                    <ThemedText type='subtitle' style={{ margin: 8 }}>{price}</ThemedText>
                </View>
            </View>
            <Pressable style={{ position: 'absolute', right: 10, top: 10, backgroundColor: Colors[colorScheme ?? 'light'].tint, borderRadius: 20, padding: 4 }} onPress={handleDelete}>
                <Ionicons name="trash-bin" size={16} color='#F53333' />
            </Pressable>
            <Switch style={{ position: 'absolute', right: 2, bottom: 0 }} trackColor={{ false: Colors.dark.lighterInvert, true: Colors[colorScheme ?? 'light'].invertColor }} thumbColor={isEnabled ? Colors.dark.mainColor : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
        </ThemedView>
    );
}
