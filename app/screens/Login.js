/**
 * Created by tai on 4/2/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Main'}),
              ]
            });
            this.props.navigation.dispatch(resetAction)
          }}
          style={{
            backgroundColor: 'steelblue',
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              color: '#fff',
              backgroundColor: 'transparent',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}