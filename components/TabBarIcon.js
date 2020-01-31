import React from 'react'
import { Foundation, Entypo, MaterialIcons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

export default function TabBarIcon({ focused, name, type }) {
  switch (type) {
    case 'entypo':
      return (
        <Entypo
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      )

    case 'material':
      return (
        <MaterialIcons
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      )

    default:
      return (
        <Foundation
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      )
  }
}
