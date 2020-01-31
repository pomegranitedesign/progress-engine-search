import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class Sort extends Component {
  state = {
    selectedLeft: true,
    selectedRight: false
  }

  handlePressLeft = () =>
    this.setState({ selectedLeft: true, selectedRight: false }, () =>
      this.props.setSortBy('distance')
    )

  handlePressRight = () =>
    this.setState({ selectedRight: true, selectedLeft: false }, () =>
      this.props.setSortBy('perHour')
    )

  render() {
    const leftButtonStyles = {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20
    }

    const rightButtonStyles = {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20
    }

    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableHighlight onPress={this.handlePressLeft}>
            <Text
              style={
                this.state.selectedLeft
                  ? {
                      ...styles.button,
                      ...leftButtonStyles,
                      ...styles.activeLeft
                    }
                  : { ...styles.button, ...leftButtonStyles }
              }
            >
              По расстоянию
            </Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.handlePressRight}>
            <Text
              style={
                this.state.selectedRight
                  ? {
                      ...styles.button,
                      ...rightButtonStyles,
                      ...styles.activeLeft
                    }
                  : { ...styles.button, ...rightButtonStyles }
              }
            >
              По стоимости часа
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    fontSize: 13,
    backgroundColor: '#F4F4F4',
    padding: 10,
    width: 169,
    textAlign: 'center'
  },
  activeLeft: {
    backgroundColor: '#202748',
    color: '#ffffff'
  },
  activeRight: {
    backgroundColor: '#202748',
    color: '#ffffff'
  }
})
