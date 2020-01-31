import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export default function ListItem({ item }) {
  const { address, perHour, distance } = item
  const distanceText =
    distance <= 1000
      ? 'Рядом'
      : distance <= 2000
      ? 'В пределах 2 км'
      : '2 км и дальше'

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.distanceText}>{distanceText}</Text>
        </View>
        <Text style={styles.perHour}>{perHour}₽ / час</Text>
      </View>
      <Divider style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  address: {
    color: '#000000',
    fontSize: 13
  },
  perHour: {
    color: '#7C7C85',
    fontSize: 13
  },
  divider: {
    backgroundColor: '#EAEAEA',
    height: 1,
    marginVertical: 25
  },
  distanceText: {
    color: '#9E9EA2'
  }
})
