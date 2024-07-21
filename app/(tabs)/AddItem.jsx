import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, StyleSheet, TextInput, ProgressBarAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; // You can use any icon library
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { FIREBASE_STORAGE, FIREBASE_DB } from '../../FirebaseConfig'; 

export default function AddItem() {
  const colorScheme = useColorScheme();
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [imageURI, setImageURI] = useState('');
  const [uploadProgress, setUploadProgress] = useState('');
  const [imageName, setImageName] = useState('"Upload Image"');

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setImageURI(result.assets[0].uri);
        const filename = result.assets[0].fileName;
        setImageName(filename);
      }
    } catch (error) {
      console.error('Error picking image', error);
    }
  };

  const upload = async () => {
    if (!imageURI) {
      Alert.alert('No Image Selected', 'Please select an image before uploading.');
      return;
    }

    try {
      const documentPath = `FoodItems/${new Date().getTime()}`;
      const response = await fetch(imageURI);
      const blob = await response.blob();
      const storageReference = ref(FIREBASE_STORAGE, documentPath);
      const uploadTask = uploadBytesResumable(storageReference, blob);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          setUploadProgress(progress);
        }, 
        (error) => {
          console.error('Error uploading image:', error);
          Alert.alert('Upload Failed', 'There was an error uploading the image. Please try again.');
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('Image available at:', downloadURL);

          await addDoc(collection(FIREBASE_DB, 'FoodItems'), {
            imageURL: downloadURL,
            itemName: itemName, 
            itemCategory: category, 
            price: price, 
          });

          Alert.alert('Item Added', 'The Item has been uploaded successfully.');
          // Reset fields after upload
          setItemName('')
          setCategory('')
          setPrice('')
          setUploadProgress('')
          setImageURI('')
          setImageName('"Upload Image"')
          
        }
      );
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Upload Failed', 'There was an error uploading the image. Please try again.');
    }
  };

  return (
    <SafeAreaView style={{ margin: 15 }}>
      <ThemedText type='defaultSemiBold' style={{ alignSelf: 'center', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 30, marginBottom: 10, backgroundColor: Colors[colorScheme ?? 'light'].mainLight }}>Add Item</ThemedText>
      <ScrollView>
        <ThemedText type='subtitle' style={styles.questionText}>Enter Item Name</ThemedText>
        <TextInput 
          style={[styles.input, { backgroundColor: Colors[colorScheme ?? 'light'].boxColor }]}
          placeholder="Example: Lasagna Pasta"
          placeholderTextColor='#b2b4b8'
          onChangeText={(text) => setItemName(text)}
          value={itemName}
        />
        <ThemedText type='subtitle' style={styles.questionText}>Enter Item Category</ThemedText>
        <TextInput 
          style={[styles.input, { backgroundColor: Colors[colorScheme ?? 'light'].boxColor }]}
          placeholder="Example: Italian"
          placeholderTextColor='#b2b4b8'
          onChangeText={(text) => setCategory(text)}
          value={category}
        />
        <ThemedText type='subtitle' style={styles.questionText}>Set Price</ThemedText>
        <TextInput 
          style={[styles.input, { backgroundColor: Colors[colorScheme ?? 'light'].boxColor }]}
          placeholder="Example: 389"
          placeholderTextColor='#b2b4b8'
          onChangeText={(text) => setPrice(text)}
          value={price}
        />
  
        <ThemedText type='subtitle' style={styles.questionText}>Upload Food Image</ThemedText>
        <TouchableOpacity 
          onPress={pickImage}
          style={[styles.uploadSection, {
            borderColor: Colors[colorScheme ?? 'light'].lighterInvert,
            backgroundColor: imageURI ? Colors[colorScheme ?? 'light'].mainLight : Colors[colorScheme ?? 'light'].boxColor
          }]}
        >
          <MaterialIcons name='add-photo-alternate' color={Colors[colorScheme ?? 'light'].lighterInvert} size={30} />
          <ThemedText style={{ color: Colors[colorScheme ?? 'light'].lighterInvert }} type='mini'>{imageName}</ThemedText>
          {uploadProgress !== '' && (
            <ThemedText style={{ color: Colors[colorScheme ?? 'light'].lighterInvert, marginTop:10 }} type='mini'>Uploading... {uploadProgress}%</ThemedText>
          )}
          <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={uploadProgress/100}
          color={Colors[colorScheme ?? 'light'].mainColor}
        />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <MaterialIcons name='security' size={14} color={Colors[colorScheme ?? 'light'].lighterInvert} />
          <ThemedText type='mini'> Your data is securely handled.</ThemedText>
        </View>
  
        <TouchableOpacity onPress={upload}>
          <View style={{ width: '90%', backgroundColor: Colors.dark.mainColor, height: 50, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginVertical: 30, elevation: 5 }}>
            <ThemedText style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Upload</ThemedText>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  questionText: {
    marginTop: 10,
  },
  input: {
    elevation: 1,
    borderRadius: 30,
    padding: 15,
    marginHorizontal: 2,
    marginVertical: 14,
  },
  uploadSection: {
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    padding: 4,
    width: '96%', 
    height: 120,  
    borderStyle: 'dashed',
    borderWidth: 1.3,
    marginVertical: 14,
  },
});
