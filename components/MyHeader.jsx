import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from './ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function MyHeader() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
<View style={GlobalStyles.bar}>
        <View>
            <Image
              source={require('../assets/images/EELogo.png')}
              style={{ width: 150, height: 45, resizeMode: 'contain' }}
            />
        </View>
        <View style={GlobalStyles.notificationPanel}>
          <TouchableOpacity activeOpacity={0.7}
          onPress={() => { navigation.navigate('Notification'); }}>
            <View style={GlobalStyles.notificationIcon}>
              <Ionicons name="notifications" size={23} color={Colors[colorScheme ?? 'light'].invertColor} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
                onPress={() => { navigation.push('MyProfile'); }}
                >
          <Ionicons name="person-circle-outline" size={48} color={Colors[colorScheme ?? 'light'].invertColor} />

          </TouchableOpacity>
        </View>
      </View> 
         </SafeAreaView>
  );
}

const GlobalStyles = StyleSheet.create({
   
  statusBarArea: {},
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    marginTop:-15,
  },
  notificationPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    padding: 10,
  },
});
