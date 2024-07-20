import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
      screenOptions={{
        //way to use colors from Colors.ts
        tabBarShowLabel: false, // Hide the labels
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].deepColor,
        headerShown: false,
        tabBarInactiveTintColor: '#6B582C',
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].mainColor, // Tab bar background color
          position:'absolute',
          bottom: 15,
          borderRadius:30,
          marginHorizontal:15,
          height: 60,
          elevation: 15,
        },
        tabBarLabelStyle: {
          fontSize: 12, // Label font size
          fontWeight: 'bold', // Label font weight
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home-circle' : 'home-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddItem"
        options={{
          title: 'Add Item',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'plus-circle' : 'plus-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Manage"
        options={{
          title: 'Manage',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'view-list' : 'view-list-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
