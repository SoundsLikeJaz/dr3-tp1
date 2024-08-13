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
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ex1"
        options={{
          title: 'EX-1',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'checkbox'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
            name="ex2"
            options={{
                title: 'EX-2',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={'search'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="ex3"
            options={{
                title: 'EX-3',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={'square'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="ex4"
            options={{
                title: 'EX-4',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={'image'} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
