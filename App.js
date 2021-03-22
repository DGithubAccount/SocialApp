/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    GoogleSignin.configure({
      webClientId:
        "557005292072-sej3ht23gpaatukd84fso6ikdpo7h6bm.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log('userinfo -- ', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('eror -- ', error.code);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('eror -- ', error.code);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('eror -- ', error.code);
      } else {
        // some other error happened
        console.log('eror -- ', error.code);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          // disabled={this.state.isSigninInProgress}
        />
        <Text> Not SignedIn</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;