import React, { useEffect, useState } from 'react'
import {Text, View, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native'
import { FlatList, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import { User, onAuthStateChanged } from 'firebase/auth'
import { MaterialIcons } from '@expo/vector-icons'; // You can use any icon library
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker';

// import { RadioButton,  } from 'react-native-paper';
// import * as DocumentPicker from 'expo-document-picker';
// import ideaSubmissionStyle from './ideaSubmissionStyle';
// import Toast from 'react-native-toast-message'
// import { FIREBASE_AUTH, storage, FIREBASE_DB } from '../../FirebaseConfig'; 
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import SubmitButton from './SubmitButton';
// import { addDoc, collection } from 'firebase/firestore';

export default function AddItem (
  // {documentData, setDocumentData,
  // teamName, setTeamName,
  // ideaDescription, setIdeaDescription,
  // categoryChecked, setCategoryChecked, otherCategory, setOtherCategory, handleCategoryPress,
  // currentUser, setCurrentUser}
) {
  const colorScheme = useColorScheme();
  const [imageURI, setImageURI] = useState('')
  const [imageName, setImageName] = useState('')
  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        
      });
  
      if (!result.canceled && result !== null) {
        console.log(result);
        setImageURI(result.assets[0].uri)
        // setImageName(result.assets[0].fileName)
        console.log(imageURI, '=>', imageName);
      }
    } catch (error) {
      console.error('Error picking image', error);
    }
  };

    return(
      <SafeAreaView style={{margin:15}} >
        <ThemedText type='defaultSemiBold' style={{alignSelf:'center', paddingHorizontal:18, paddingVertical:8, borderRadius:30, marginBottom:10, backgroundColor:Colors.dark.mainLight}}>Add Item</ThemedText>
        <ScrollView>
        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Enter Item Name</ThemedText>
        <TextInput 
        style={[ideaSubmissionStyle.input, {backgroundColor:Colors[colorScheme ?? 'light'].boxColor}]}
        placeholder="Example: Lasagna Pasta"
        placeholderTextColor='#b2b4b8'
        // onChangeText={(text) => setTeamName(text)}
        // value={teamName}
        />
        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Enter Item Category</ThemedText>
        <TextInput 
        style={[ideaSubmissionStyle.input, {backgroundColor:Colors[colorScheme ?? 'light'].boxColor}]}
        placeholder="Example: Italian"
        placeholderTextColor='#b2b4b8'
        // onChangeText={(text) => setTeamName(text)}
        // value={teamName}
        />
        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Set Price</ThemedText>
        <TextInput 
        style={[ideaSubmissionStyle.input, {backgroundColor:Colors[colorScheme ?? 'light'].boxColor}]}
        placeholder="Example: 389"
        placeholderTextColor='#b2b4b8'
        // onChangeText={(text) => setTeamName(text)}
        // value={teamName}
        />
  
        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Upload Food Image</ThemedText>
        <TouchableOpacity 
          onPress={()=>  pickImage()}
          style={[ideaSubmissionStyle.uploadSection, {
            borderColor:Colors[colorScheme ?? 'light'].lighterInvert,
            backgroundColor:imageURI? Colors[colorScheme ?? 'light'].mainLight : Colors[colorScheme ?? 'light'].boxColor
            // backgroundColor: imageURI ? '#C9D9FF' : Colors[colorScheme ?? 'light'].boxColor

            }]}
           >
          <MaterialIcons name='add-photo-alternate' color={Colors[colorScheme ?? 'light'].lighterInvert } size={30} />
          <ThemedText style={{color:Colors[colorScheme ?? 'light'].lighterInvert}} type='mini'>"Upload the image here"</ThemedText>
        </TouchableOpacity>
        <View style={{justifyContent:'center', flexDirection:'row', }}>
        <MaterialIcons name='security'  size={14} color={Colors[colorScheme ?? 'light'].lighterInvert} />
          <ThemedText type='mini' > Your data is securely handled.</ThemedText>
          {/* <Text style= {{ fontSize:10, }}></Text> */}
        </View>
      {/* </KeyboardAvoidingView> */}



      <TouchableOpacity 
      // onPress={uploadPDF}
      >
        <View style={{ width: '90%', backgroundColor: Colors.dark.mainColor, height: 50, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginVertical: 30, elevation: 5 }}>
          <ThemedText style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Upload</ThemedText>
        </View>
      </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    )
  }

  const ideaSubmissionStyle = StyleSheet.create({
    questionText: {
        marginTop:10,
    },
    categoryTouch: {        
        width:'48%',
        height:'90%',
        borderRadius:25,
        margin:'1%',
        alignItems:'center',
        justifyContent:'center',  
    },
    input: {
        // backgroundColor:'white',
        elevation:1,
        borderRadius:30,
        padding: 15,
        marginHorizontal:2,
        marginVertical: 14,
    },
    uploadSection: {
      borderRadius: 18,
      justifyContent:'center',
      alignItems:'center',
      // backgroundColor: 'white',
      marginHorizontal:6,
      padding:4,
      width: '96%', 
      height: 120,  
      borderStyle: 'dashed',
      // borderColor:'#263E65',
      borderWidth:1.3,
      marginVertical: 14,
      // backgroundColor:'#C9D9FF',
    },
});
