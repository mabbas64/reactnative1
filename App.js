import React, {Component} from 'react';
import StackNavigator from 'react-navigation';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';

/* create a home-screen and profile screen in app */
const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

class GoodBye extends Component{
  render() {
    return (
      <Text style={ styles.red }> Goodbye dear {this.props.name}!!!</Text>
    );
  }
}

export default class App extends React.Component {

  


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text>Hey Abbas,</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <GoodBye name='Abbas' />          
        </View>
        <View style={styles.buttonContainer}>
            <Button style={{color: '#00ff00'}}
              onPress={ () => { Alert.alert('You just pressed the button, gosh!')}}
              title = "Do Not Press!"
            />
        </View>
        <ScrollView style={{flex: 4}}>
          <Text>Scroll down, Abbas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Text>Scroll down, Abbas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Text>Scroll down, Abbas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Text>Scroll down, Abbas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </ScrollView>
        <View style={styles.copyrightContainer}>
          <View>
            <Text style={styles.smallText}>Copyright (C) 2017 - M. Abbas</Text>
          </View>
        </View>

      </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red:{
    color: 'red',
    fontSize: 30,
  },
  copyrightContainer: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
    padding: 10,
  },
  smallText: {
    fontSize: 12,
    color: '#ccc',
  },
  buttonContainer: {
    backgroundColor: '#111',
    margin: 20,
  },
});
