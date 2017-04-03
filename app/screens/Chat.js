/**
 * Created by tai on 4/2/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import CustomView from './CustomView';

export default class Chat extends Component {

  static navigationOptions = {
    title: ({ state }) => `${state.params.user.name}`
  };

  constructor(props) {
    super(props);
    this.state = {messages: []};
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 3,
          location: {
            latitude: 10.777745,
            longitude: 106.701768,
          },
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://e27.co/img/startups/11852/logo-1457327647.png',
          },
        },
        {
          _id: 2,
          text: 'Hello, Coderschool React Native class. Have fun!',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://e27.co/img/startups/11852/logo-1457327647.png',
          },
        },
        {
          _id: 1,
          image: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/p200x200/11403360_10100901374320434_2543083367635502905_n.jpg?oh=6fdb7778e1f2eeeb53f938318c557e44&oe=59599A58',
          text: 'iOS Swift tutor',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://e27.co/img/startups/11852/logo-1457327647.png',
          },
        },

      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => { this.onSend(messages); }}
        renderCustomView={(props) => this.renderCustomView(props)}
        user={{
          _id: 1,
        }}
      />
    );
  }

}