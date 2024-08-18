import React from 'react'
import { View, Text, Image } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import { colors } from '../../styles/globalStyles'
import { icons } from '../../constants'

const focusedStyle = {
  color: colors.textBalck,
  fontSize: 12,
} 
const TabIcon=({color,icon,name,focused})=>{
  return(
        <View>
            <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            style={{width:25,height:25}}
            />
           <Text style={focused ? focusedStyle : null}>{name}</Text>
        </View>
    )
}
export default function TabsLayout() {
  return (
    <>
    <Tabs
     screenOptions={{
      tabBarShowLabel: false, // Hide default labels if you're adding custom ones
    }}
    >
      {/* Home Icon */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.homeIcon}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      {/* Search */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'search',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.searchIcon}
              color={color}
              name="Search"
              focused={focused}
            />
          ),
        }}
      />
       {/* Search */}
       <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmarkIcon}
              color={color}
              name="Boomark"
              focused={focused}
            />
          ),
        }}
      />
        {/* Profile*/}
        <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.userIcon}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
    </>
  )
}