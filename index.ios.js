'use strict';

import React, { Component } from 'react';
import { AppRegistry,Text,StyleSheet,Navigator} from 'react-native';

import SearchPage from './SearchPage';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}
        renderScene={(route, navigator) => {  
          let Component = route.component;  
          return <Component {...route.params} navigator={navigator}/>  
        }} />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', function () {
  return PropertyFinderApp;
})