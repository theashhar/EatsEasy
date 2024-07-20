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

export default function NewSubmission (
  // {documentData, setDocumentData,
  // teamName, setTeamName,
  // ideaDescription, setIdeaDescription,
  // categoryChecked, setCategoryChecked, otherCategory, setOtherCategory, handleCategoryPress,
  // currentUser, setCurrentUser}
) {
  const colorScheme = useColorScheme();



  
    // const [docRefID, setDocRefID] = useState(null)
    // const pickDocument = async () => {  
    //   try {
    //     const result = await DocumentPicker.getDocumentAsync({
    //       type: ['application/pdf',
    //       //  'application/pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    //       ]   
    //     })
    //     if (!result.canceled && result !== null){
    //       setDocumentData(result)
    //       console.log(result)
    //       // console.log(result.assets[0].name)
    //     }
    //   } catch (error) {
    //     console.log('Error picking document:', error)
    //     Alert.alert('An error occurred while picking the document.')
    //   }
    // };

    // const uploadPDF = async () => {
    //   try {
    //     if (!allFieldsCheck()) {
    //       Alert.alert('Please fill all fields before submitting.');
    //       return;
    //     }
    //     const currentUserEmail = currentUser ? currentUser.email : 'Loading...'
    //     const userName = currentUser ? currentUser.displayName : 'Loading...'
    //     const documentPath = `IdeaDoc/${currentUserEmail}/${teamName.trim()}(${docRef}) - ${documentData.assets[0].name}`;
    //     const response = await fetch(documentData.assets[0].uri);
    //     const blob = await response.blob();
    //     const storageReference = ref(storage, documentPath);
    //     await uploadBytes(storageReference, blob);
    //     const downloadURL = await getDownloadURL(storageReference);
    //     console.log('URL at: ', downloadURL);
  
    //       const docRef = await addDoc(collection(FIREBASE_DB, `${userName.trim()} - ${currentUserEmail}`), {
    //         userName,
    //         currentUserEmail,
    //         teamName,
    //         categoryChecked,
    //         ideaDescription,
    //         downloadURL,
    //         fileTitle: documentData.assets[0].name
    //       }).then((docRef) => {
    //         setDocRefID(docRef.id);
    //         console.log(docRef.id);
            
    //         Alert.alert('PDF uploaded successfully!');
    //         console.log('PDF uploaded successfully!');
    //       })
    //       // var documentPath = `IdeaDoc/${currentUserEmail}/${teamName.trim()}(${docRef}) - ${documentData.assets[0].name}`;
    //   } catch (error) {
    //     console.error('Error uploading PDF: ', error);
    //   }
    // }
  
    // const allFieldsCheck = () => {
    //   return Boolean(
    //     teamName &&
    //     categoryChecked &&
    //     ideaDescription &&
    //     documentData 
    //   )
    // }

    return(
      <SafeAreaView style={{margin:15}} >
        <ScrollView>

          {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            > */}

        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Enter Item Name</ThemedText>
        <TextInput 
        style={ideaSubmissionStyle.input}
        placeholder="Example: Lasagna Pasta"
        placeholderTextColor='#b2b4b8'
        // onChangeText={(text) => setTeamName(text)}
        // value={teamName}
        />
        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Enter Item Category</ThemedText>
        <TextInput 
        style={ideaSubmissionStyle.input}
        placeholder="Example: Italian"
        placeholderTextColor='#b2b4b8'
        // onChangeText={(text) => setTeamName(text)}
        // value={teamName}
        />
        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Set Price</ThemedText>
        <TextInput 
        style={ideaSubmissionStyle.input}
        placeholder="Example: 389"
        placeholderTextColor='#b2b4b8'
        // onChangeText={(text) => setTeamName(text)}
        // value={teamName}
        />
  
        <ThemedText type='subtitle' style={ideaSubmissionStyle.questionText}>Upload PPT/PDF</ThemedText>
        <TouchableOpacity 
          // onPress={()=>  pickImage()}
          style= {[ideaSubmissionStyle.uploadSection,
          // {backgroundColor : documentData ? '#C9D9FF' : 'white'}
          {backgroundColor : 'white'}
          ]}
           >
          <MaterialIcons style={{ borderStyle: 'dashed', borderColor:'#263E65', borderWidth:1, padding:5, paddingLeft:7, margin:8, borderRadius:20 }} name='upload-file' color='#263E65' size={30} />
          <ThemedText type='mini'>'Upload the image here'</ThemedText>
        </TouchableOpacity>
        <View style={{justifyContent:'center', flexDirection:'row', }}>
        <MaterialIcons name='security'  size={14} />
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
        backgroundColor:'white',
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
      backgroundColor: 'white',
      marginHorizontal:6,
      padding:4,
      width: '96%', 
      height: 120,  
      borderStyle: 'dashed',
      borderColor:'#263E65',
      borderWidth:1.3,
      marginVertical: 14,
      // backgroundColor:'#C9D9FF',
    },
});
