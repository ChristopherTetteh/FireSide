import React from 'react'
import { View, Text } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import { icons } from '../../constants'

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
      
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon:({color,focused})=>{
             <TabIcon
             icon={icons.homeIcon}
             color={color}
             focused={focused}
             />
          }
        }}
      />
    </Tabs>
    </>
  )
}