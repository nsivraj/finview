import * as React from 'react';
import { View, FlatList, Text } from 'react-native';

import styles from './styles';

const extractKey = ({id}:any) => id.toString()

export interface Props {
  name: string;
  fetchMarketPrices: any,
  prices: Array<any>,
}

class Home extends React.PureComponent<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMarketPrices();
  }

  renderItem = ({item}:any) => {
    return (
      <Text style={styles.row}>
        {item.login}
      </Text>
    )
  }

  render() {
    const { prices } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          data={prices}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}

export default Home;
