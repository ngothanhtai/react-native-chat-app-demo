/**
 * Created by tai on 4/2/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Images from './../assets/Images';

export default class Conversations extends Component {

  static navigationOptions = {
    title: 'Conversations',
    tabBar: {
      label: 'Conversations',
      icon: ({ tintColor }) => (
        <Image
          source={Images.bubble}
          style={{
            tintColor,
            width: 30, height: 30,
          }}
        />
      ),
    },
  };

  constructor(props) {
    super(props);

    const items = [
      { avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/p320x320/11081401_766260346804352_6396044547922841237_n.jpg?oh=99466832454954dfa4f4d7e7e8daa615&oe=5962D522', name: 'Bao Nguyen', lastMessage: `I don't have time.`, createdTime: new Date()},
      { avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/17362421_10154420047173873_7786823615911246539_n.jpg?oh=86c1646960435ca107177c3b59973d1e&oe=595BA881', name: 'Tài Ngô', lastMessage: 'Have a nice day!', createdTime: new Date()},
      { avatar: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/p200x200/11403360_10100901374320434_2543083367635502905_n.jpg?oh=6fdb7778e1f2eeeb53f938318c557e44&oe=59599A58', name: 'Harley Trung', lastMessage: '<3', createdTime: new Date()},
    ];

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(items),
    }
  }

  renderRow(rowData) {
    const { navigation: { navigate } } = this.props;
    const { avatar, name, lastMessage, createdTime } = rowData;
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('Chat', { user: rowData});
        }}
        style={{
          flexDirection: 'row',
          padding: 8, paddingVertical: 4,
        }}
      >
        <Image
          source={{uri: avatar}}
          style={{
            width: 50, height: 50, borderRadius: 25,
            margin: 8,
          }}
        />
        <View
          style={{
            margin: 8, marginVertical: 14,
            justifyContent: 'space-between',
          }}
        >
          <Text>{ name }</Text>
          <Text
            style={{
              fontSize: 13, color: 'gray',
            }}
          >
            { lastMessage }
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            margin: 12,
          }}
        >
          <Text
            style={{
              fontSize: 12, color: 'gray',
            }}
          >
            { moment(createdTime).format('HH:mm A') }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
    )
  }
}