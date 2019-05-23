import * as React from 'react';
import { View, Image, SafeAreaView, TextInput, Text } from 'react-native';

import { tabbedNavigation } from '../../../navigators/navigation';
import styles from './styles';
import { BUTTON_DEFAULT } from '../../elements/buttons';

export interface Props {
  fetchMarketAssets: any,
  fetchMarketAssetPairs: any,
}

interface State {}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Kick off the redux-thunks to get data that is needed before the app launches
     */
    this.props.fetchMarketAssets();
    this.props.fetchMarketAssetPairs();
  }

  navigateToHome = () => {
    tabbedNavigation();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/rnn2.png')}
          />
          <Image
            resizeMode="center"
            source={require('../../assets/images/rn_ts.png')}
          />
          {/* <Text>Username:</Text>
          <TextInput style={styles.input}
            placeholder="Username"
            placeholderTextColor="#9a73ef"
            returnKeyType='go'
            autoCorrect={false}
          />
          <Text>Password:</Text>
          <TextInput style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            returnKeyType='go'
            secureTextEntry={true}
            autoCorrect={false}
          /> */}
          <BUTTON_DEFAULT
            title="Login To App"
            onClick={this.navigateToHome}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
