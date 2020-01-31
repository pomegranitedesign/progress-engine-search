import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ListItem from '../components/Listitem'

export default class List extends Component {
  state = {
    data: [
      {
        id: 1,
        address: '3-я Тверская-Ямская ул. 8',
        perHour: 150,
        distance: 700
      },
      { id: 2, address: 'Арбатская ул. 3А', perHour: 150, distance: 1500 },
      {
        id: 3,
        address: 'Фестивальная ул. 5 стр. 64',
        perHour: 150,
        distance: 400
      },
      { id: 4, address: 'Тверск ул. 34', perHour: 10, distance: 3000 },
      { id: 5, address: 'Тверск ул. 34', perHour: 80, distance: 1500 },
      {
        id: 6,
        address: 'Садлово-Кудринская ул. 5 стр.34',
        perHour: 30,
        distance: 2100
      },
      {
        id: 7,
        address: 'Ленинградское шоссе д. 34 стр.34',
        perHour: 30,
        distance: 1909
      }
    ]
  }

  render() {
    const { data } = this.state
    const { sortBy, search } = this.props

    let sortedData = data
    if (sortBy === 'distance')
      sortedData = data
        .sort((a, b) => a.distance > b.distance)
        .filter((item) => item.address.match(search, 'gm'))
    else if (sortBy === 'perHour')
      sortedData = data
        .sort((a, b) => a.perHour > b.perHour)
        .filter((item) => item.address.match(search, 'gm'))

    return (
      <View style={styles.container}>
        <FlatList
          data={sortedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ListItem item={item} />}
          style={styles.list}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  list: {
    marginVertical: 20
  }
})
