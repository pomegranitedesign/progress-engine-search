import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from '../components/TabBarIcon'
import { ListScreen, MapScreen, DealsScreen, ProfileScreen } from '../screens'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const ListStack = createStackNavigator({ List: ListScreen }, config)
ListStack.navigationOptions = {
  tabBarLabel: 'Список',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'list'
      }
    />
  )
}

const MapStack = createStackNavigator({ Map: MapScreen }, config)
MapStack.navigationOptions = {
  tabBarLabel: 'Карта',
  tabBarIcon: <TabBarIcon name="map" type="entypo" />
}

const DealsStack = createStackNavigator({ Deals: DealsScreen }, config)
DealsStack.navigationOptions = {
  tabBarLabel: 'Акции',
  tabBarIcon: <TabBarIcon name="star-outlined" type="entypo" />
}

const ProfileStack = createStackNavigator({ Profile: ProfileScreen }, config)
ProfileStack.navigationOptions = {
  tabBarLabel: 'Профиль',
  tabBarIcon: <TabBarIcon name="person-outline" type="material" />
}

const tabNavigator = createBottomTabNavigator({
  MapStack,
  ListStack,
  DealsStack,
  ProfileStack
})

tabNavigator.path = ''

export default tabNavigator
