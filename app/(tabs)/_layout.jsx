import React from 'react'
import { View, Text } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import { icons } from '../../constants'
import { colors } from '../../styles/globalStyles'

const TabIcon=({color,icon,name,focused})=>{
    return(
        <View>
            <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            style={{width:24,height:24}}
            />
            <Text
            style={focused }
            >{name}</Text>
        </View>
    )
}
export default function TabsLayout() {
  return (
    <>
    <Tabs
     screenOptions={{
      tabBarShowLabel: false, // Hide default labels if you're adding custom ones
      tabBarStyle: {
        backgroundColor: colors.secondary, // Customize background
        borderTopWidth: 0, // Remove border
        elevation: 50, // Android shadow
        shadowOpacity: 0.9,
        shadowOffset: { width: 12, height: 6 },
        shadowRadius: 30,
      },
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon:({icon,color,focused})=>{
             <TabIcon
             icon={icons.homeIcon}
             color={colors.primary}
             focused={focused}
             />
          }
        }}
      />
    </Tabs>
    </>
  )
}