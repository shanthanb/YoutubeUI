
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./images/logo.png')} style={{ width: 98, height: 22 }} />
          <View style={styles.rightNav}>
          <TouchableOpacity>
            <Icon style={styles.navItem} name="videocam" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
          data={data.items}
          renderItem={(video)=><VideoItem video={video.item} />}
          keyExtractor={(item)=>item.id}
          ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#E5E5E5'}}/>}

           />
        </View>
        <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.tabItem1}name="home" size={22}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.tabItem1}name="whatshot" size={22} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.tabItem1}name="subscriptions" size={22} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.tabItem1}name="email" size={22} />
            <Text style={styles.tabTitle}>Inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.tabItem1}name="folder" size={22} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 50,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24.3
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25,
    color:'#808080'
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 47,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  
  },
  tabItem: {
    alignItems:'center',
    justifyContent:'center'
    
  },
  tabItem1: {
       color: '#808080'

  },
  tabTitle: {
    fontSize: 11,
    color: '#808080',
    paddingTop: 2
  }
});