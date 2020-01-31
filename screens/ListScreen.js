import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Sort, List, Search } from '../containers'

export default class ListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Список',
    headerStyle: {
      elevation: 0,
      height: 169,
      color: '#020202',
      fontSize: 28,
      fontWeight: 'bold'
    }
  })

  state = {
    sortBy: '',
    search: ''
  }

  setSortBy = (value) => this.setState({ sortBy: value })
  handleSearch = (search) => this.setState({ search })

  render() {
    const { sortBy, search } = this.state
    return (
      <View style={styles.container}>
        <Search search={search} handleSearch={this.handleSearch} />
        <Sort setSortBy={this.setSortBy} />
        <List sortBy={sortBy} search={search} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12
  }
})
