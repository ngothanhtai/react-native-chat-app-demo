/**
 * Created by tai on 4/2/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login';
import Users from './screens/Users';
import Conversations from './screens/Conversations';
import Chat from './screens/Chat';

const tabBar = TabNavigator({
  Conversations: { screen: Conversations },
  Users: { screen: Users },
});
const app = StackNavigator({
  Login: { screen: Login },
  Main: { screen: tabBar },
  Chat: { screen: Chat },
});
export default app;