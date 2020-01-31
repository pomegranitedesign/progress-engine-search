import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'

export default class Search extends Component {
  render() {
    const { search, handleSearch } = this.props
    return (
      <View style={styles.search}>
        <SearchBar
          round
          lightTheme
          value={search}
          containerStyle={styles.containerStyle}
          onChangeText={handleSearch}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    marginVertical: 30
  },
  containerStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderTopColor: '#ffffff',
    borderBottomColor: '#ffffff'
  }
})
