import * as WebBrowser from 'expo-web-browser';

import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,

} from 'react-native';
import { MapView } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

const { width, height } = Dimensions.get('screen');

export default class Campings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
        {this.renderHeader()}
        {this.renderTabs()} 
        {this.renderMap()}
        {this.renderList()}
        </ScrollView> 
      </View>
    );
  }
  state = 
  {
     active: 'all'
  }
  static navigationOptions = {
    header: null,
  };
  renderHeader() {
  return (
    <View style={styles.header}>
    <View style={{ flex: 2, flexDirection: 'row', }}>
    <View style={styles.settings}>
    <View style={styles.location}>
    <FontAwesome name="location-arrow" size={14} color="white" />
    </View>
    </View>
    <View style={styles.options}>
    <Text style={{ fontSize: 12, color: 'grey', marginBottom: 5, }}>
      Detected Location
    </Text>
    <Text style={{ fontSize: 14, fontWeight: '300', }}>
    Northern Islands () 
    </Text>
    </View>  
    </View>
    
    <View style={styles.settings}>
    <Ionicons name="ios-settings" size={20} color="black" />
    </View>
    </View>
   );
  }
   renderMap() {
    return (
      <View style={styles.map}>
      <MapView
      style={{ flex: 1, height: height * 0.5, width }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
      </View>
    );
  }
  renderTabs() {
    const { active } = this.state;
    return (
      <View style={styles.tabs}>
      <View 
      style={[
        styles.tab, 
        active === 'all' ? styles.activeTab : null
        ]}
      >
        <Text 
        style={[
          styles.tabTitle,
          active === 'all' ? styles.activeTabTitile : null
          ]}
        >
        All Sport
        </Text>
        </View>
        <View 
      style={[
          styles.tab,
          active === 'tent' ? styles.activeTab : null
          ]}
        >
        <Text 
        style={[
          styles.tabTitle,
          active === 'tent' ? styles.activeTabTitile : null
          ]}
        >
          Tenting
        </Text>
        </View>
        <View 
        style={[
          styles.tab,
          active === 'rv' ? styles.activeTab : null
          ]}
        >
        <Text 
        style={[
          styles.tabTitle, 
          active === 'rv' ? styles.activeTabTitile : null
          ]}
        >
          Rv Camping
        </Text>
        </View>
        </View>
    );
  }
  renderList() {
    return (
      <View>
        <Text>hshs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    height: height * 0.15,
    paddingHorizontal: 14,
  },
  location: {
    height: 24,
    width: 24,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    
  },
  options: {
    flex: 1,
    paddingHorizontal: 14,

},
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.05,

    },

  tab: {
    justifyContent: 'center',
    paddingHorizontal: 14,

  },
  tabTitle: {
    fontWeight: 'bold',

  },
  settings: {
     alignItems: 'flex-end', 
    justifyContent: 'center',
  },
  activeTab: { 
    borderBottomColor: 'orange',
    borderBottomWidth: 3, 
  },
  activeTabTitile: { 
    color: 'orange',
  },
});
