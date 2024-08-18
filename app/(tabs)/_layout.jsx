import React from 'react'
import { View, Text, Image } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import { colors } from '../../styles/globalStyles'
import { icons } from '../../constants'

const TabIcon=({color,icon,name,focused})=>{
  return(
        <View style={{justifyContent:'center',alignItems:'center',gap:2}}>
            <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            style={{width:24,height:24}}
            />
           <Text style={{color:color}}>{name}</Text>
        </View>
    )
}
export default function TabsLayout() {
  return (
    <>
    <Tabs
     screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor:'#ffa001',
      tabBarInactiveTintColor:'#fff',
      tabBarStyle:{
        backgroundColor:'#161622',
        borderTopWidth:2,
        borderTopColor:colors.tertairy,
        height:60,
      }
      
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