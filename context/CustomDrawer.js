import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}></DrawerItemList>
            </DrawerContentScrollView>
            <View>
                <Text> Sign out </Text>
            </View>
        </View>
    )
}

export default CustomDrawer;