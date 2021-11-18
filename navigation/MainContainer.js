import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//telas
import homescreen from './screens/home/homescreen'
import searchscreen from './screens/search/searchscreen'
import orderscreen from './screens/orders/ordersscreen'
import profilescreen from './screens/profile/profilescreen'

//nomes
const homename = 'Início'
const searchname = 'Busca'
const ordername = 'Pedidos'
const profilename = 'Perfil'

const Tab = createBottomTabNavigator()

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homename}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let rn = route.name
            if (rn == homename) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn == searchname) {
              iconName = focused ? 'search' : 'search-outline'
            } else if (rn == ordername) {
              iconName = focused ? 'file-tray' : 'file-tray-full-outline'
            } else if (rn == profilename) {
              iconName = focused ? 'person' : 'person-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name={homename} component={homescreen} />
        <Tab.Screen name={searchname} component={searchscreen} />
        <Tab.Screen name={ordername} component={orderscreen} />
        <Tab.Screen name={profilename} component={profilescreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
